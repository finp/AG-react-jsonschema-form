# consider using preprocessor instead of this script



inc_path=$1

    inc_dirname=$(dirname "${inc_path}")
    inc_basename=$(basename "${inc_path}")
    ruby ./bin/asciidoc-coalescer.rb  -a allow-uri-read $inc_path > ./build/$inc_basename.adoc
# cp ./build/*.ws.adoc ../mobile-workshop
