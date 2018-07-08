class Person < ApplicationRecord
	validates :name, :bio, presence: true
end
