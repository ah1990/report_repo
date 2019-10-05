class Api::V1::ReportsController < Api::V1::ApplicationController

  before_action :get_report, only: %i(show update download)

  def index
    reports = Report.all
    render json: reports, each_serializer: ReportSerializer, status: :ok
  end

  def show
    render json: @report, status: :ok
  end

  def create
    result = CreateReport.call(title: params[:title],
                               description: params[:description],
                               file: params[:file])
    if result.success?
      render json: result.report, status: :ok
    else
      render json: result.message, status: :unprocessable_entity
    end
  end

  def update
    success = @report.update(update_params)
    if success
      render json: @report, status: :ok
    else
      render json: { message: @report.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def download
    send_data @report.file.download,
              filename: @report.file_data['original_filename'],
              content_type: @report.file_data['mime_type'],
              disposition: 'download'
  end

  private

  def update_params
    params.permit(:title, :description)
  end

  def get_report
    @report = Report.find_by_id(params[:id])
    unless @report
      render json: { message: 'Report not found' },
             status: :not_found
    end
  end
end