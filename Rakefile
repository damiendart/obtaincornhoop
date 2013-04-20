# Copyright (C) 2013 Damien Dart, <damiendart@pobox.com>.
# This file is distributed under the MIT licence. For more information, please
# refer to the accompanying "LICENCE" file.

require "haml"
require "rake"
require "rake/clean"
require "sass"

# Increase the degree of precision of values that Sass spits out to prevent
# some browsers from rendering elements a pixel narrower than intended. See
# <https://github.com/nex3/sass/issues/319> for more information.
Sass::Script::Number.precision = 8

CLOBBER.include("*.css", "*.html")
task :default => ["theme.html", "style.css"]

desc "Spit out the Obtain Corn Hoop stylesheet."
file "style.css" => Dir.glob(File.join("scss" ,"*")) do |task|
  puts "# Spitting out \"" + task.name + "\"."
  output = Sass::Engine.for_file(File.join("scss", "main.scss"),
      {:cache => false, :style => :compact, :syntax => :scss}).render
  output.gsub!(/^[\s]*$\n/, "") # Remove empty lines.
  File.open(task.name, "w") do |file|
    file.write(output)
  end
end

desc "Spit out the Obtain Corn Hoop Tumblr theme template."
file "theme.html" => Dir.glob(File.join("haml" ,"*")) do |task|
  puts "# Spitting out \"" + task.name + "\"."
  template = File.read(File.join("haml", "main.haml"))
  output = Haml::Engine.new(template, {:format => :html5,
      :escape_attrs => false, :attr_wrapper => "\""}).render
  output.gsub!(%r{<tumblrblock(.*?)>},"{block:\\1}")
  output.gsub!(%r{</tumblrblock(.*?)>},"{/block:\\1}")
  output.gsub!(%r{&nbsp;}, " ")
  File.open(task.name, "w") do |file|
    file.write(output)
  end
end
