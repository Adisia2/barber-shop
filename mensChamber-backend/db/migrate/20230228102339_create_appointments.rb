class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :service
      t.string :date
      t.references :customer, foreign_key: true
      t.references :service,  foreign_key: true

      t.timestamps
    end
  end
end
