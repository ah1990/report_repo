class ReportSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :file_data
end