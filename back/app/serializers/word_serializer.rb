class WordSerializer < ActiveModel::Serializer
    attributes :id, :word, :pronunciation
end