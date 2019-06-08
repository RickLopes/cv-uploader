CREATE DATABASE cv_uploader;
USE cv_uploader;
CREATE TABLE IF NOT EXISTS `candidates` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `birthdate` varchar(255) NOT NULL,
  `cv_file` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);