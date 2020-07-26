resource "aws_s3_bucket" "amepet_host" {
    bucket = "sanbox-amepet.com"
    acl    = "public-read"

    website {
        index_document = "index.html"
        error_document = "index.html" //we will change this as soon as we have a error.html
    }
}