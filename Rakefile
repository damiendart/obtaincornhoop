# Rakefile for Obtain Corn Hoop's Tumblr theme.
#
# Copyright (C) 2013, 2014 Damien Dart, <damiendart@pobox.com>.
# This file is distributed under the MIT licence. For more information, please
# refer to the accompanying "LICENCE" file.

require "rubygems"
require "bundler/setup"
Bundler.require(:default)

# Increase the degree of precision of values that Sass spits out to prevent
# some browsers from rendering elements a pixel narrower than intended. See
# <https://github.com/nex3/sass/issues/319> for more information.
Sass::Script::Number.precision = 8

CLOBBER.include("*.css", "*.html")
task :default => ["theme.html", "blog-style.css"]

desc "Spit out the Obtain Corn Hoop stylesheet."
file "blog-style.css" => Dir.glob(File.join("scss" ,"*")) do |task|
  puts "# Spitting out \"" + task.name + "\"."
  output = Sass::Engine.for_file(File.join("scss", "main.scss"),
      {:cache => false, :style => :compressed, :syntax => :scss}).render
  File.open(task.name, "w") do |file|
    file.write(output)
  end
end

desc "Spit out the Obtain Corn Hoop Tumblr theme template."
file "theme.html" => Dir.glob(File.join("haml" ,"*")) +
    Dir.glob(File.join("javascript" ,"*")) do |task|
  puts "# Spitting out \"" + task.name + "\"."
  template = File.read(File.join("haml", "main.haml"))
  output = Haml::Engine.new(template, {:format => :html5,
      :escape_attrs => false, :attr_wrapper => "\""}).render
  output.gsub!(%r{^\s*$\n}, "")
  output.gsub!(%r{^\s*//.*\n}, "")
  output.gsub!(%r{<tumblrblock(.*?)>}, "{block:\\1}")
  output.gsub!(%r{</tumblrblock(.*?)>}, "{/block:\\1}")
  output.gsub!(%r{&nbsp;}, " ")
  File.open(task.name, "w") do |file|
    file.write(output)
  end
end
