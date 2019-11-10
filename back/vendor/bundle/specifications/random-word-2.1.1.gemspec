# -*- encoding: utf-8 -*-
# stub: random-word 2.1.1 ruby lib

Gem::Specification.new do |s|
  s.name = "random-word".freeze
  s.version = "2.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Peter Williams".freeze, "Todd Thomas".freeze]
  s.bindir = "exe".freeze
  s.date = "2018-08-27"
  s.description = "A random word generator intended for use in test data factories.  This library uses a large list (the wordnet corpus) of english words and provides an enumerator interface to that corpus that will return the words in a random order without repeats.".freeze
  s.email = ["pezra@barelyenough.org".freeze, "todd.thomas@openlogic.com".freeze]
  s.homepage = "https://github.com/openlogic/random-word".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Pick random words for factory data".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.14"])
      s.add_development_dependency(%q<coveralls>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<machinist>.freeze, ["~> 2.0"])
    else
      s.add_dependency(%q<bundler>.freeze, ["~> 1.14"])
      s.add_dependency(%q<coveralls>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<machinist>.freeze, ["~> 2.0"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.14"])
    s.add_dependency(%q<coveralls>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<machinist>.freeze, ["~> 2.0"])
  end
end
