class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :title, null: false
      t.text :description
      t.jsonb :file_data, null: false, default: '{}'

      t.timestamps
    end
  end
end
