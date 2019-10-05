class CreateReport
  include Interactor

  def call
    byebug
    report = Report.new(title: context.title,
                        description: context.description)
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
      context.fail!(message: report.errors.messages)
    end
  end
end