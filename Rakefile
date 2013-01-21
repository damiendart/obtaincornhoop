require "haml"
require "rake"
require "rake/clean"
require "sass"

CLOBBER.include("*.css", "*.html")
task :default => ["theme.html", "blog-style.css"]

desc "Spit out the Obtain Corn Hoop theme stylesheet."
file "blog-style.css" => Dir.glob(File.join("scss" ,"*")) do |task|
  puts "# Spitting out \"" + task.name + "\"."
  output = Sass::Engine.for_file(File.join("scss", "main.scss"),
      {:cache => false, :style => :compact, :syntax => :scss}).render
  output.gsub!(/^[\s]*$\n/, "") # Remove empty lines.
  File.open(task.name, "w") do |file|
    file.write(output)
  end
end

desc "Spit out the Obtain Corn Hoop theme template."
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
