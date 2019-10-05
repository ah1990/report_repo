class Report < ApplicationRecord
  has_one_attached :file

  validates :title, uniqueness: true
  validates :title, length: {minimum: 3, maximum: 10}
  validates :file, attached: true, content_type: %w(application/pdf image/png text/plain image/tiff)
end