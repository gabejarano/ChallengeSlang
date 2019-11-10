class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
    t.timestamps
    t.string :word
    t.string :pronunciation
    end
  end
end
