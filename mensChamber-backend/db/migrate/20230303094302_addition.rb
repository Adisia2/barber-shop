class Addition < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :name, :string
    add_column :appointments, :phone, :integer
    add_column :appointments, :email, :string
    add_column :appointments, :service, :string
  end
end
