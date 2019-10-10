class CreateReport
  include Interactor

  def call
    ActiveRecord::Base.transaction do
      report = Report.new(title: context.title,
                          description: context.description)
      byebug
      file_data = {
        original_filename: context.file.original_filename,
        mime_type: context.file.content_type,
        size: context.file.size
      }
      report.file_data = file_data
      report.file.attach(context.file)
      if report.save
        context.report = report
      else
        report.file.purge
        context.fail!(message: report.errors.messages)
      end
    end
  end
end