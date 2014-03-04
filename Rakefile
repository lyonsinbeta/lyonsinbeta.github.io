GH_PAGES = "lyonsinbeta.github.io"

desc "Build Jekyll site and copy files"
task :build do
  system "jekyll build"
  system "rm -r ../#{GH_PAGES}/*" unless Dir['../#{GH_PAGES}/*'].empty?
  system "cp -r _site/* ../#{GH_PAGES}/"
end
