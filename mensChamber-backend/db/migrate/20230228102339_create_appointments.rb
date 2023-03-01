class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :start_time
      t.references :customer, foreign_key: true
      t.references :service,  foreign_key: true

      t.timestamps
    end
  end
end
