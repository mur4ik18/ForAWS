-- MySQL dump 10.13  Distrib 5.6.28, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mofa
-- ------------------------------------------------------
-- Server version	5.6.28-0ubuntu0.15.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group__permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group__permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permission_group_id_689710a9a73b7457_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  CONSTRAINT `auth__content_type_id_508cf46651277a81_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add Tag',7,'add_tag'),(20,'Can change Tag',7,'change_tag'),(21,'Can delete Tag',7,'delete_tag'),(22,'Can add Tagged Item',8,'add_taggeditem'),(23,'Can change Tagged Item',8,'change_taggeditem'),(24,'Can delete Tagged Item',8,'delete_taggeditem'),(25,'Can add event',9,'add_event'),(26,'Can change event',9,'change_event'),(27,'Can delete event',9,'delete_event'),(28,'Can add media',10,'add_media'),(29,'Can change media',10,'change_media'),(30,'Can delete media',10,'delete_media'),(31,'Can add source',11,'add_source'),(32,'Can change source',11,'change_source'),(33,'Can delete source',11,'delete_source'),(34,'Can add thumbnail',12,'add_thumbnail'),(35,'Can change thumbnail',12,'change_thumbnail'),(36,'Can delete thumbnail',12,'delete_thumbnail'),(37,'Can add thumbnail dimensions',13,'add_thumbnaildimensions'),(38,'Can change thumbnail dimensions',13,'change_thumbnaildimensions'),(39,'Can delete thumbnail dimensions',13,'delete_thumbnaildimensions'),(40,'Can add article',14,'add_article'),(41,'Can change article',14,'change_article'),(42,'Can delete article',14,'delete_article'),(43,'Can add background timing',15,'add_backgroundtiming'),(44,'Can change background timing',15,'change_backgroundtiming'),(45,'Can delete background timing',15,'delete_backgroundtiming'),(46,'Can add page',16,'add_page'),(47,'Can change page',16,'change_page'),(48,'Can delete page',16,'delete_page'),(49,'Can add subscriber',17,'add_subscriber'),(50,'Can change subscriber',17,'change_subscriber'),(51,'Can delete subscriber',17,'delete_subscriber'),(52,'Can add category',18,'add_category'),(53,'Can change category',18,'change_category'),(54,'Can delete category',18,'delete_category'),(55,'Can add color',19,'add_color'),(56,'Can change color',19,'change_color'),(57,'Can delete color',19,'delete_color'),(58,'Can add size',20,'add_size'),(59,'Can change size',20,'change_size'),(60,'Can delete size',20,'delete_size'),(61,'Can add designer',21,'add_designer'),(62,'Can change designer',21,'change_designer'),(63,'Can delete designer',21,'delete_designer'),(64,'Can add product',22,'add_product'),(65,'Can change product',22,'change_product'),(66,'Can delete product',22,'delete_product'),(67,'Can add stock',23,'add_stock'),(68,'Can change stock',23,'change_stock'),(69,'Can delete stock',23,'delete_stock'),(70,'Can add Folder',24,'add_folder'),(71,'Can change Folder',24,'change_folder'),(72,'Can delete Folder',24,'delete_folder'),(73,'Can use directory listing',24,'can_use_directory_listing'),(74,'Can add folder permission',25,'add_folderpermission'),(75,'Can change folder permission',25,'change_folderpermission'),(76,'Can delete folder permission',25,'delete_folderpermission'),(77,'Can add file',26,'add_file'),(78,'Can change file',26,'change_file'),(79,'Can delete file',26,'delete_file'),(80,'Can add clipboard',27,'add_clipboard'),(81,'Can change clipboard',27,'change_clipboard'),(82,'Can delete clipboard',27,'delete_clipboard'),(83,'Can add clipboard item',28,'add_clipboarditem'),(84,'Can change clipboard item',28,'change_clipboarditem'),(85,'Can delete clipboard item',28,'delete_clipboarditem'),(86,'Can add image',29,'add_image'),(87,'Can change image',29,'change_image'),(88,'Can delete image',29,'delete_image'),(89,'Can add image',30,'add_image'),(90,'Can change image',30,'change_image'),(91,'Can delete image',30,'delete_image'),(92,'Can add user',31,'add_user'),(93,'Can change user',31,'change_user'),(94,'Can delete user',31,'delete_user'),(95,'Can add order',32,'add_order'),(96,'Can change order',32,'change_order'),(97,'Can delete order',32,'delete_order'),(98,'Can add item',33,'add_item'),(99,'Can change item',33,'change_item'),(100,'Can delete item',33,'delete_item'),(101,'Can add voucher',34,'add_voucher'),(102,'Can change voucher',34,'change_voucher'),(103,'Can delete voucher',34,'delete_voucher');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$20000$wjC5j3Rpl4WH$BrZa2AMQzhWr8AzI9oXMoAo3LMPKjU9QBwIXpeHYLhk=','2015-08-07 13:16:31',1,'admin','','','admin@mofa.com',1,1,'2015-05-17 19:29:51'),(2,'pbkdf2_sha256$20000$s5wnZxNXw69R$b8aan5FwAmLVjDnvVCOi6mLmGJMUyUYASsVFUXYN2UU=','2015-07-02 12:12:14',1,'kerry','Kerry','','kerry@recme.com',1,1,'2015-05-19 22:43:21'),(3,'pbkdf2_sha256$20000$yevrV0xwALre$TyKAuirR8C3uOEL36+6jxK6/aKw1fgT4We0VSKoeAoI=',NULL,1,'jacober','Paul','Jacober','paul@jacober.com',1,1,'2015-08-13 19:47:29');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_4b5ed4ffdb8fd9b0_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_u_permission_id_384b62483d7071f0_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_u_permission_id_384b62483d7071f0_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissi_user_id_7f0938558328534a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `default_cache`
--

DROP TABLE IF EXISTS `default_cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `default_cache` (
  `cache_key` varchar(255) NOT NULL,
  `value` longtext NOT NULL,
  `expires` datetime NOT NULL,
  PRIMARY KEY (`cache_key`),
  KEY `default_cache_expires` (`expires`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `default_cache`
--

LOCK TABLES `default_cache` WRITE;
/*!40000 ALTER TABLE `default_cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `default_cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `djang_content_type_id_697914295151027a_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_52fdd58701c5f563_fk_users_user_id` (`user_id`),
  CONSTRAINT `djang_content_type_id_697914295151027a_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_52fdd58701c5f563_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2016-01-12 18:28:40','45','Study on Eggs',1,'',14,4),(2,'2016-01-15 11:03:12','4','eugenia@mofamofamofa.com',2,'Changed password.',31,3),(3,'2016-01-15 11:09:44','8','Cubico coffee tasting (12 December 15 - 06:36 PM)',2,'Changed tags.',9,3),(4,'2016-01-15 11:13:46','46','screenshot',1,'',14,4),(5,'2016-01-15 11:14:11','46','screenshot',2,'Changed tags.',14,4),(6,'2016-01-15 11:14:44','47','test issac',1,'',14,3),(7,'2016-01-15 11:50:31','5','loona top ',2,'Changed tags. Deleted stock \"2 loona top  (loona top  2)\". Changed order for image \"Image object\".',22,3),(8,'2016-01-15 11:55:07','4','mofamofamofa',2,'Changed icon.',21,3),(9,'2016-01-15 11:55:24','23','mofa__1Test.jpg',2,'No fields changed.',29,3),(10,'2016-01-15 11:55:34','5','loona top ',2,'Changed tags. Changed image and order for image \"Image object\".',22,3),(11,'2016-01-15 11:58:14','23','mofa__1Test.jpg',3,'',29,3),(12,'2016-01-15 11:59:03','24','Screen Shot 2016-01-15 at 11.56.25 AM.png',2,'No fields changed.',29,3),(13,'2016-01-15 12:02:32','26','Screen Shot 2016-01-15 at 11.56.25 AM.png',2,'No fields changed.',29,3),(14,'2016-01-15 12:03:26','28','Screen Shot 2016-01-15 at 11.56.25 AM.png',3,'',29,3),(15,'2016-01-15 12:03:29','25','Screen Shot 2016-01-15 at 11.56.25 AM.png',3,'',29,3),(16,'2016-01-15 12:03:33','26','Screen Shot 2016-01-15 at 11.56.25 AM.png',3,'',29,3),(17,'2016-01-15 12:03:36','27','Screen Shot 2016-01-15 at 11.56.25 AM.png',3,'',29,3),(18,'2016-01-15 12:04:26','5','loona top ',2,'Changed tags. Added stock \"1 loona top  (Pink 2)\". Added image \"Image object\".',22,3),(19,'2016-02-02 13:32:37','9','Jumpsuits',1,'',18,1),(20,'2016-02-04 14:41:18','21','P1030354.JPG',2,'No fields changed.',29,3),(21,'2016-02-04 14:41:53','5','loona top ',2,'Changed tags. Changed image for stock \"1 loona top  (Pink 2)\". Deleted image \"Image object\".',22,3),(22,'2016-02-04 14:43:03','5','loona top ',2,'Changed tags. Added image \"Image object\".',22,3),(23,'2016-02-04 14:44:23','5','loona top ',2,'Changed tags. Changed image for stock \"1 loona top  (Pink 2)\". Changed image and order for image \"Image object\".',22,3),(24,'2016-02-04 14:44:55','5','loona top ',2,'Changed tags. Added image \"Image object\".',22,3);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_45f3b1d93ec8c61c_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(5,'contenttypes','contenttype'),(11,'easy_thumbnails','source'),(12,'easy_thumbnails','thumbnail'),(13,'easy_thumbnails','thumbnaildimensions'),(9,'events','event'),(10,'events','media'),(27,'filer','clipboard'),(28,'filer','clipboarditem'),(26,'filer','file'),(24,'filer','folder'),(25,'filer','folderpermission'),(29,'filer','image'),(14,'galleries','article'),(15,'mofa','backgroundtiming'),(16,'mofa','page'),(17,'mofa','subscriber'),(33,'orders','item'),(32,'orders','order'),(6,'sessions','session'),(18,'shop','category'),(19,'shop','color'),(21,'shop','designer'),(30,'shop','image'),(22,'shop','product'),(20,'shop','size'),(23,'shop','stock'),(34,'shop','voucher'),(7,'taggit','tag'),(8,'taggit','taggeditem'),(31,'users','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2015-05-17 19:29:16'),(2,'auth','0001_initial','2015-05-17 19:29:16'),(4,'contenttypes','0002_remove_content_type_name','2015-05-17 19:29:16'),(5,'auth','0002_alter_permission_name_max_length','2015-05-17 19:29:16'),(6,'auth','0003_alter_user_email_max_length','2015-05-17 19:29:16'),(7,'auth','0004_alter_user_username_opts','2015-05-17 19:29:16'),(8,'auth','0005_alter_user_last_login_null','2015-05-17 19:29:16'),(9,'auth','0006_require_contenttypes_0002','2015-05-17 19:29:16'),(10,'taggit','0001_initial','2015-05-17 19:29:16'),(11,'events','0001_initial','2015-05-17 19:29:16'),(12,'events','0002_auto_20150512_1726','2015-05-17 19:29:16'),(13,'events','0003_media','2015-05-17 19:29:16'),(14,'events','0004_auto_20150512_1905','2015-05-17 19:29:16'),(15,'sessions','0001_initial','2015-05-17 19:29:17'),(16,'easy_thumbnails','0001_initial','2015-06-17 12:54:27'),(17,'easy_thumbnails','0002_thumbnaildimensions','2015-06-17 12:54:27'),(18,'events','0005_auto_20150608_1633','2015-06-17 12:54:27'),(19,'events','0006_auto_20150614_1700','2015-06-17 12:54:27'),(20,'galleries','0001_initial','2015-06-17 12:54:27'),(21,'galleries','0002_auto_20150608_1045','2015-06-17 12:54:27'),(22,'galleries','0003_auto_20150608_1633','2015-06-17 12:54:27'),(23,'galleries','0004_auto_20150614_1700','2015-06-17 12:54:28'),(24,'galleries','0005_auto_20150701_0953','2015-07-01 10:17:34'),(25,'mofa','0001_initial','2015-07-01 10:17:34'),(26,'mofa','0002_page','2015-07-02 09:26:56'),(27,'mofa','0003_auto_20150702_0517','2015-07-02 09:26:56'),(28,'mofa','0004_about_page','2015-07-02 09:26:56'),(29,'mofa','0005_subscriber','2015-07-04 17:11:54'),(30,'shop','0001_initial','2015-07-24 16:40:12'),(31,'shop','0002_auto_20150722_1534','2015-07-24 16:40:12'),(32,'shop','0003_auto_20150722_1557','2015-07-24 16:40:12'),(33,'shop','0004_auto_20150723_1108','2015-07-24 16:40:12'),(34,'shop','0005_auto_20150723_1555','2015-07-24 16:40:12'),(35,'shop','0006_stock_image','2015-07-30 05:12:28'),(36,'shop','0007_auto_20150801_1150','2015-08-01 11:52:03'),(37,'filer','0001_initial','2015-08-07 12:52:32'),(38,'filer','0002_auto_20150606_2003','2015-08-07 12:52:32'),(39,'shop','0008_image','2015-08-07 12:52:32'),(40,'shop','0009_auto_20150805_0455','2015-08-07 12:52:32'),(41,'shop','0010_auto_20150805_0457','2015-08-07 12:52:32'),(42,'shop','0011_auto_20150807_1056','2015-08-07 12:52:33'),(43,'events','0007_auto_20150810_1234','2015-08-10 12:57:53'),(44,'shop','0012_auto_20150810_1232','2015-08-10 12:57:54'),(45,'users','0001_initial','2015-08-25 14:47:54'),(46,'orders','0001_initial','2015-08-25 14:47:55'),(47,'orders','0002_auto_20150814_1013','2015-08-25 14:47:55'),(48,'orders','0003_auto_20150816_1712','2015-08-25 14:47:55'),(49,'orders','0004_auto_20150819_1532','2015-08-25 14:47:55'),(50,'shop','0013_product_price','2015-08-25 14:47:55'),(51,'users','0002_auto_20150813_1716','2015-08-25 14:47:56'),(52,'orders','0005_auto_20150901_0932','2015-09-02 07:11:51'),(53,'orders','0006_order_total','2015-09-02 07:11:51'),(54,'shop','0014_auto_20150901_0853','2015-09-02 07:11:52'),(55,'orders','0007_auto_20150905_0028','2015-09-05 02:12:54'),(56,'orders','0008_order_tax','2015-09-05 02:12:54'),(57,'orders','0009_order_subtotal','2015-09-05 02:12:54'),(58,'orders','0010_auto_20150906_0924','2015-09-06 09:31:25'),(59,'shop','0015_voucher','2015-09-06 09:31:25'),(60,'orders','0011_auto_20150908_0952','2015-09-08 23:17:48'),(61,'orders','0012_order_shipping','2015-09-08 23:17:48'),(62,'users','0003_auto_20150911_0959','2015-09-11 11:23:54'),(63,'orders','0013_order_submit_date','2015-09-12 03:42:34'),(64,'users','0004_user_phone','2015-09-12 12:17:50'),(65,'orders','0014_order_shipped','2015-09-14 10:20:12'),(66,'shop','0016_product_tags','2015-09-14 10:20:13'),(67,'mofa','0006_lb_pages','2015-09-14 23:23:33'),(68,'galleries','0006_article_caption','2015-10-01 06:11:56'),(69,'galleries','0007_article_embedded_image','2015-10-01 08:12:57'),(70,'admin','0001_initial','2016-01-12 14:02:49');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('01oz8ou6aoq6ngxlc4na7n721f9w0fdy','MjBhY2QyNWQ0NDRlZmM1NWQzZGMwZDliZDYwMmYwYmJkYzdmYjlkMzp7Il9hdXRoX3VzZXJfaGFzaCI6IjNkM2Q2ZTRjY2IwOGRhOGQ1ZGYxNjNkY2M3MDg2OTUwNDJjYWQwODQiLCJmaWxlcl9sYXN0X2ZvbGRlcl9pZCI6IjEiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2015-08-22 14:13:37'),('0cpeizmu0tjc2ux12i7rfjkqbber51lw','ZDliNzgwZTg1ZWVmNzRlN2JkMGE2NjFlZTI4MDFlY2U4OWY2YzFjNDp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJmaWxlcl9sYXN0X2ZvbGRlcl9pZCI6bnVsbCwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2lkIjoiMSIsImN1cnJlbnRfb3JkZXIiOjYyfQ==','2015-11-11 16:47:25'),('0d07nwsi5r4xf7e41pkefznp4wlz4367','N2RmNjZjOTE3YjIzMjA5OGM4NDQ4YTU5YTY4ZTZlOTYxMjkzNmY1Yjp7ImN1cnJlbnRfb3JkZXIiOjU2fQ==','2015-10-14 12:53:37'),('0q4a1cdmexwm4vyqerz911jrs8kdvw4r','ZmYyZjI4ZjRlMjQzY2M0NzFhOTAwY2U3MWY0NDAzMWQ4MjUzM2IxMzp7ImN1cnJlbnRfb3JkZXIiOjExMX0=','2015-11-09 15:22:35'),('0snhkldsdjixxowp9nyrza1rz0b8y1j6','MTc1YzM4ZjlkMGFkYzJmYjZhMWRjOWU1MzQ1MjBlZTBkNzUwMGY1OTp7ImN1cnJlbnRfb3JkZXIiOjE0OX0=','2015-12-22 16:29:17'),('0xgqac8igt1jvyvg340hvtlowzqx99pu','MDcwMzMzOWUxM2ViM2UzZjNjMDc0YjY0MWE3ODRmOTMwODg0NzdiOTp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMzkxYjBiNjAyMGFmMTBkMGFmMWZjOTNhYjE5ZjdmZDY0NzI5OGRiMiIsIl9hdXRoX3VzZXJfaWQiOiIxIiwiZmlsZXJfbGFzdF9mb2xkZXJfaWQiOiIxIiwiY3VycmVudF9vcmRlciI6N30=','2015-09-18 18:59:58'),('139wpsl49xd7n6drlvse6kxz6d9kuyd8','Y2NiYTJmNzNlYTMxZDVlMDcwMWY2ZDM3M2ZjZTdjNTU2YWY4OTE1Yjp7ImN1cnJlbnRfb3JkZXIiOjEyMX0=','2015-11-09 16:47:36'),('1cx14evxd3skqw5j5khn8q7uf0oyictg','ZGJkYTU2ODhhNGQ1OTI2YmRiNjkwZTdjMDRhOWY3YTNhNTM1ZGY4Mzp7ImN1cnJlbnRfb3JkZXIiOjE0M30=','2015-12-17 15:46:21'),('1mj9tw5yjnkx8y82jnvln14msb86j95q','OGVhY2U0ZTUwZDUxZTdiOWE2YjM3YjJjZjViNDZiYmE4MmI2YzlmYjp7ImN1cnJlbnRfb3JkZXIiOjI4fQ==','2015-09-17 08:31:49'),('1oxu55yhcnhe3es9k60voisvdphco2l4','ODJhMTE0OTYxYTE1ZGJhNGEwNzlkMjE4MDZiNWIyYTAyODVkMTkwZTp7ImN1cnJlbnRfb3JkZXIiOjIxNX0=','2016-02-18 14:57:42'),('21q0gmagvvhp7eryvz4eup0zd6y6y7lf','ZmQxN2YyZDg5Yzk1YmM5OTQ4MmM1YjRjYWYwZmRkZTlmMjVmZWM2Zjp7ImN1cnJlbnRfb3JkZXIiOjIwOH0=','2016-02-06 17:38:37'),('2ldkct1lecr86zpem7k4bl0mgje8vy2i','NzU4ZTZjZjdiMGUxZjI1MzVkZGJlYzBiYmRlYzU5Y2I1ZTE4YmE1NTp7ImN1cnJlbnRfb3JkZXIiOjcwfQ==','2015-11-03 15:35:54'),('2mul5uow1ksz79ojbh26trm52mxj3qpx','NDg1YjVmYjU5YzMxMzE2NGQ2YTc1MjY4MGY0NTdjNTJiOGVhM2UzNTp7ImN1cnJlbnRfb3JkZXIiOjEwfQ==','2015-09-10 15:25:55'),('38e16jay7n6bxd7xft47mmappzdg5cpn','ZDk3NjZjNzNkMjQxZDBjZDUwODc0ZjQ3Mzk1NmNmMjgxMDU1YTYxYzp7ImN1cnJlbnRfb3JkZXIiOjM5fQ==','2015-09-28 09:11:10'),('3d0mnkacz784o42cqltloq4sdunkue1c','NGQwMzY3ZjdlMjIwM2FhZmM4OGYzNjM0ZjI1N2U4MGZmMWZhMjY4YTp7ImN1cnJlbnRfb3JkZXIiOjM4fQ==','2015-09-25 08:54:20'),('3lthjanyn6tkqwo90cwb923qfoqoeggd','NDM1YjI4NzBkNDEzNGJhYTJjODE2MDJlNzRhNjlkY2JmNmJjZTAyMjp7ImN1cnJlbnRfb3JkZXIiOjV9','2015-10-22 13:32:04'),('3tebzfq17cusguou2s2rvbtq30xgu9xp','YzNhZDEyZTQ2MTY2ZThjOWU4ZWI1ZGMzZDYxMmM3YjljMTFmY2NiNDp7ImN1cnJlbnRfb3JkZXIiOjE5MX0=','2016-01-25 18:31:41'),('3tr26cyjkrq8yf4noe9kwhx4yipahbz1','ZmM4YTU1YzlhMWFkZWNmZjRjNGZkNzg3ODEyYTUyNDE0MTVmZjM0Zjp7ImN1cnJlbnRfb3JkZXIiOjE0N30=','2015-12-22 14:29:23'),('3zmtrl81xvy4x4ddfawklw65wjbhbj52','ZjEzYWExZGExZWU4ODQ2ZjhhOTU3MjVlOTMwZGEyMTNiNGQ4ODQ2Yjp7ImN1cnJlbnRfb3JkZXIiOjc0fQ==','2015-11-09 14:49:20'),('411fvf35g6u1dtkoj2jxjrmuyafxa5kg','YTMwZmZkMWE2YTE4MmQ1ZjU1NGNhNWZlOTEzZTg5ZDlmYTQ5MjBiNDp7ImN1cnJlbnRfb3JkZXIiOjI1fQ==','2015-09-15 08:11:10'),('47hw0i6gyojsxid2v9f7gf8q9nvo67ax','OWUwYTQyODRmZmJlNDk4YjZlMDdmOTJlYWQ4Mjg1ZTY2MDBhY2VhZDp7ImN1cnJlbnRfb3JkZXIiOjExfQ==','2015-09-10 16:05:00'),('4at9k4pbm05h4oqjz1wz2n8iewsh6dm6','NWU4OGQyYWQzN2RhOGYyN2NlOTAwZDJhNjc1MmU3MzBjYjUxMTZiNzp7ImN1cnJlbnRfb3JkZXIiOjE2Nn0=','2016-01-19 09:52:35'),('4dz9jzhrjhorf2a7l0pwodx3gedkgzxj','MTIwYzhkZDBjYzNlYzEyOGY2OWY4OTE4MjVkZDhmNzcwYmVlZDI4NTp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MjF9','2015-09-11 17:37:52'),('525qjdtit2mntcytm0q75j2pkl6o7o3h','MzA1YmY0ODk3NTgwMWQwZDI0OGNjNjgwYWRlNzU2ZDVmZjlkNDBkOTp7Il9hdXRoX3VzZXJfaGFzaCI6IjYwYTgyY2NjNzcxNzQzMDMzNjQ5ZDA0ZDNjZTZkNTI2YjBiMDFiOGMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIzIiwiY3VycmVudF9vcmRlciI6MTM3fQ==','2015-12-03 16:28:39'),('55iu7ewbgpy82ta08zci8ccllmoqggm4','NGZhNWFmMmU0MzY3MjIxZjE2YmVmYjBhNDRiOWNmYjE3MTg0NjBlODp7Il9hdXRoX3VzZXJfaGFzaCI6IjU4ZDkwYmEyZDI2NzI4M2EyNzViYTU4YjMxMDA1NTIzZWNjOTY3M2EiLCJfYXV0aF91c2VyX2lkIjoiMyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTh9','2015-09-18 12:41:45'),('5i7kjgv4nze12febkqa9gjvm0909pudc','Yjc4Y2EzZjZjZTFjN2I0MTRmZWRhYmYwMWQ4OTE2NzRkNmNmZWI5MDp7ImN1cnJlbnRfb3JkZXIiOjg2fQ==','2015-11-09 15:20:49'),('5joieiayxu0u5yn47rz8mta2sf4m2fn3','YmM2NDc0ZmY1YjcwMzc5NWE0ODcxNTAzODNmODMwZjdkNzcyNGU1Njp7ImN1cnJlbnRfb3JkZXIiOjEwN30=','2015-11-09 15:22:33'),('5l42veownkual1079at8dmqqlf482zzn','ZTZkNTM1ODgyMWUyNTU5MzNmOTlhZjQwZWVjMGU4Y2MxMmIwMzFkMDp7ImN1cnJlbnRfb3JkZXIiOjIxM30=','2016-02-18 11:34:47'),('63nbywvdlyljn7dawtz4j3dt76145gkz','OGVlMzRmMjM2NzcxZWZkNGQ3Y2YzMTI1Mzg3NTNkZDIzMjZlOTZmMTp7ImN1cnJlbnRfb3JkZXIiOjE2OX0=','2016-01-21 12:23:23'),('64v2ci89oigjhn005mngh4bgzj5grsk3','ZmU0NjgzNTA3MzlhZGQ0NGE5ODE1NGNjZWNlZWZjMTVjYzI2YjhmZTp7ImN1cnJlbnRfb3JkZXIiOjEyNn0=','2015-11-09 16:59:58'),('650z0rgxs0so3cy49rrcrpe9wluf1a26','NDdiMjExMzY2YWYwZTQ5ZDI2N2MzYzlmMTBmNjI1OTU0ODNmY2E5OTp7ImN1cnJlbnRfb3JkZXIiOjE0MX0=','2015-12-15 19:02:45'),('66xvrnph36eebltd8ro2r1cghedhbao2','NGZjNjFjYzI2NTZkYmU3MWY4NmUwMTk4YmYyZWNkYjhlNjdkNDVhYzp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTU3fQ==','2016-01-06 03:39:47'),('6aykf0sjoqofa59dyvi5sqahx1bsll7f','MDUxNTgxYzhkNTI1NTJlNjRiMjBjNzUzZDg1ZThkMTExY2I2OWFlZDp7ImN1cnJlbnRfb3JkZXIiOjg3fQ==','2015-11-09 15:20:49'),('6v3wa6wdcjnmzmff4m67igl35uck1tpj','M2Q3N2U4ZmY5ZDY2MzczZjM4ODkxM2EyNDYzYTMyMTIzYWFkMGE0Zjp7ImN1cnJlbnRfb3JkZXIiOjE2MH0=','2016-01-12 09:55:26'),('75pe6x3f5q1x0eswkxs1z101l5m48uwp','YzFiZmRkNWYwODUxNTZkMzQwOTA4YzFlYjQwZDYzNTBmNTQ4YTE1MTp7ImN1cnJlbnRfb3JkZXIiOjI0fQ==','2015-09-15 08:11:10'),('7e1n5mn7dld9cj7x6lr932530rgbiuj6','ODllZTZiOWIzNjhjYzAxOTI4NTgyOGUwMGQxOWFhYmQ0MmI0M2Q5Mjp7ImN1cnJlbnRfb3JkZXIiOjkxfQ==','2015-11-09 15:20:51'),('7jwzp2b74bc0c4oh8h7qbkn8tnq7b1sz','OTY0MTY4ODJjMGM2ZTEzMTZlM2E5ODkyNjQzYTgwYjU5N2MzZTRhNDp7ImN1cnJlbnRfb3JkZXIiOjIwOX0=','2016-02-10 15:04:14'),('7o20rbj02078rhz4h1n189weqgjpaikf','N2U0MjFjNjZiMTdhOTJiODM0YWM2ZTBkMzk2ZDVmYmQ0MTQwNGJlZjp7ImN1cnJlbnRfb3JkZXIiOjgzfQ==','2015-11-09 15:19:42'),('7okq9pnojh6bntct47eo6594achgdlyv','ZTNjOGVjZGZhMjg1ZTUyOGRhNGE0ODc0MzZmYmQyYWFmNDUwMWRkYjp7Il9hdXRoX3VzZXJfaGFzaCI6IjYwYTgyY2NjNzcxNzQzMDMzNjQ5ZDA0ZDNjZTZkNTI2YjBiMDFiOGMiLCJmaWxlcl9sYXN0X2ZvbGRlcl9pZCI6IjEiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIzIiwiY3VycmVudF9vcmRlciI6MTU0fQ==','2015-12-29 11:20:00'),('7qyhcc4b85elopm47muiz3c68cejtrn6','ODcwMGU5NDgxYThiZmFjMjJlYWU1NDFhOTM4NzliNWE1NGVkOTM5ODp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6NTh9','2015-11-06 18:30:57'),('83m8x97phpcoe0by9wxipp9n2oiwb4jr','NmZhZThmMTg2YzE3ODM5MDZjZDJlZTlkMDNjYjEwNTczNDk5NDk2MDp7ImN1cnJlbnRfb3JkZXIiOjg5fQ==','2015-11-09 15:20:50'),('842eee7yiry6lj8p980xq0rry3tnd0g8','MjVjYjNjNWFhYWUxZWUwZWQ3ODgyZjZmYjg3OWUxY2NlYWE1NmNkNjp7ImN1cnJlbnRfb3JkZXIiOjk1fQ==','2015-11-09 15:20:53'),('86abcpa9qi8cfxq7tdmj1q23uxc00rwr','Mjc3Njk1MmIxZTc5M2E2YjU4MDdhYWE5NGFjNTI5MThkYzAxZjM1Mjp7ImN1cnJlbnRfb3JkZXIiOjEwOX0=','2015-11-09 15:22:34'),('8aw44kzw555tj5nc9qish7nm735p51eq','NWFlMDM1ZWVkMDIzNTI3OWY0MmY2NjdjNDFiZTY3NmE3ODE0ZWMwODp7ImN1cnJlbnRfb3JkZXIiOjF9','2015-09-08 15:46:02'),('8l3u4lusqtkr6cb4fzh60wbdsbop2ok7','MTczMWExYTllMDI4Y2E0YjMxOTFlZjgwZjQzMWQ4ODQ5MzZiZTA4Yjp7ImN1cnJlbnRfb3JkZXIiOjIzfQ==','2015-09-14 08:16:54'),('8ubkt0pvo3c4uxrt52k5vxhjdehehtpz','Zjk3MDQ0MTM5NDNlMGQ5ODJhYjU1MTAxZDAyZjE3N2IxNjUyMDAwZTp7ImN1cnJlbnRfb3JkZXIiOjYzfQ==','2015-11-02 18:57:22'),('98flzwysidho1uuevh1z4q34ja435gga','ZmEzN2I5ODM4YjIwMjJmYmExNGQzM2I2YjkxMDcxMTgwZmVkM2I5ODp7ImN1cnJlbnRfb3JkZXIiOjEwMn0=','2015-11-09 15:20:55'),('9c9o9y4z76v9q5sf0txfb9y2q0w17rkg','MDdjNTMzZDU2MzgyNGI2NGFjOGRmNzQ1OGZkNzZjMGQ2ZGQ5NmQzMTp7ImN1cnJlbnRfb3JkZXIiOjcyfQ==','2015-11-05 14:33:49'),('9ggo5ffa933d1gf56vycl3ykzbkfhsri','M2RhMmI1NDNkNDkwOWY1OTBiNmVjYTk4NDM2MTBkN2M5ODg4NDYyZTp7ImN1cnJlbnRfb3JkZXIiOjEyM30=','2015-11-09 16:45:40'),('a5mg4tng43h0i0a0z376ckrw35rtl2ad','YTA1ZTVlNjBmZmUzODQxNzI5ZDcxNTQ4ZDA3NDgwYTU1MTYzZjc2ZTp7ImN1cnJlbnRfb3JkZXIiOjIyMH0=','2016-02-22 08:05:27'),('ai0cfgc9msh94ca1lxlixt8d5yd5y5py','YzFlMzUzMjI5NGNiZmUzNTg0ZTQwOGRkNDBiOTU2ZjRlMTFiOWU4MDp7ImN1cnJlbnRfb3JkZXIiOjg1fQ==','2015-11-09 15:19:59'),('aiunu5z3sfucdnojg0vglio2lvc5t594','Zjc1N2ZiZmVkMzYwMzExODg2OWI3NTQzMTA5OGI4Mjk2ZmM1MGUwZDp7ImN1cnJlbnRfb3JkZXIiOjEwOH0=','2015-11-09 15:22:33'),('amfrvg6v3qxx2l17f4zd1wgtabwzxado','MWRlY2IzNmRiYzRiNDFhZjc4MmFlNzdlNjU0ZDEwOGU0NGJkODQ3MDp7ImN1cnJlbnRfb3JkZXIiOjE0NX0=','2015-12-22 13:52:22'),('amtjc7qgozcxwosrkwp3nh38bxpitgu9','ODhkMTQ4ZTQ1ZjA0YTg5YmQ1NTYwNTk2MjMwMzU1MzY2ZGE2ZDFkMDp7ImN1cnJlbnRfb3JkZXIiOjY1fQ==','2015-11-02 18:57:23'),('b03o7vahcz6dqlxh058l36vzqppdlr5u','ODkzMDg4YzU3MzZjODZmNGJkMjc5YTI2MGZlODNmODNiNWM5ZTkxYTp7ImN1cnJlbnRfb3JkZXIiOjEwMH0=','2015-11-09 15:20:55'),('b5j1cqt0se5ewbm8lpb50yniwf7uh5aj','MTI2MTc3NDE2NWU0ZTc1MzZlNTdhMDVlYWJmYTU4ZDI1MzQ5Zjc2Yzp7ImN1cnJlbnRfb3JkZXIiOjZ9','2015-09-09 22:00:59'),('bedo5vaoars957gmdtepexfdxg8val92','NzAyOWMyYzBmZjc1NjE5MjI5NmM4YWViMTRmZTI0MmJhOTk5YWQ3ZTp7ImN1cnJlbnRfb3JkZXIiOjE2NH0=','2016-01-18 09:24:58'),('bgh5h0i2ckmahui1xwsqp46q6vj8zmh7','NmQ0MGVjMzIzMjY2MWEwNjk1ZTBmODkyZDY5MjQ4OTEzNzJiMmNhZjp7ImN1cnJlbnRfb3JkZXIiOjE4NX0=','2016-01-25 13:50:39'),('bpml7hcrm627h9f2q71o4k39izrso1s0','NzZkNWMyZmVkMDE3ZmY1NzdmODQ5NDcxZmYyYjNhNmEyZjI0MTcyODp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMzkxYjBiNjAyMGFmMTBkMGFmMWZjOTNhYjE5ZjdmZDY0NzI5OGRiMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiZmlsZXJfbGFzdF9mb2xkZXJfaWQiOm51bGwsImN1cnJlbnRfb3JkZXIiOjE0MH0=','2016-01-01 14:18:17'),('bri4ojdrtcn8p4rtcngw3hys9dne35qb','ZmEyYTNmNjAxMDZjYjIyOTE1NDFmOTM2Y2YzZTRjOThkZjUxNGZiNTp7ImN1cnJlbnRfb3JkZXIiOjY2fQ==','2015-11-02 19:05:23'),('bruusnqr2gmm47kfpqd9b37jqc11l5g8','ZWQ4ZmMzM2RhNmQ2ZWM3MDczNmYwMGVkYmY5MmVkNGM2NDgyNTViYzp7Il9hdXRoX3VzZXJfaGFzaCI6Ijg4MmM1OTk4NjI1NWVkYmMyYjM5NDFjYWNiNzlkNjUyOTc3MWYxOWQiLCJfYXV0aF91c2VyX2lkIjoiNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTgzfQ==','2016-02-07 14:10:14'),('bzzwf9swwe5t0oh2j6dcqdhavl3xv8dw','NGEyY2JhMmQ2ZTE4NGYzODI4NTI3YjY3ODE0Njc0YWJmYzc0NjVmMDp7ImN1cnJlbnRfb3JkZXIiOjh9','2015-09-10 15:25:54'),('c4dwz3j5738lp3o8zotlgoyokpgkxqk5','MTU2OTE1NWEzMjdlMTE5MGUwNjI1NGU5NGM3ZWU1NjE4MDZmY2NhODp7ImN1cnJlbnRfb3JkZXIiOjE2M30=','2016-01-18 09:24:58'),('cby7hfnmt48w688phx1skhb7wt6476xo','ZjA0OGZkM2UwMWZjYzk2YmE2YmRmZmYyNjk2YTBiMTg4OGY1OWNjYzp7ImN1cnJlbnRfb3JkZXIiOjYxfQ==','2015-11-02 18:50:35'),('ccx15yvpjxextay53vyfyoo6gkqx5zwn','MDg3NDM1NzkwNDRjZjI1ZWM0MDY5NjJmODBjZjQ4NjBkMWYwZmU5Zjp7Il9hdXRoX3VzZXJfaGFzaCI6ImY3ZTNhNzI4ZjcyZGU5MjA0NTBkZWIzOGY0NTBjZDgyMjczZGYzOGMiLCJfYXV0aF91c2VyX2lkIjoiMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTcyfQ==','2016-01-25 07:01:56'),('cdo4umos5h0d7gyp47wspvotouzdqegr','N2M0YWNkYTZiOTUyZTI5YTA1ZTFlNjBiYTNlNDMzMTU0ZjY3NGNkZDp7Il9hdXRoX3VzZXJfaGFzaCI6IjQ5NTU0N2ZhMjU5ZmFmNjVjOTNlMzY3ZDVkYTI5ZDkyNjQ2MTA3ZmEiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIn0=','2015-07-01 17:18:03'),('cfa7q1t6fito48teub3o4zxr71t37k0w','MTAwNDZmZTUxZGVlYzRhOGE3OWE2ZTlmOGU2MGYyYmRhMDIzOThmNDp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIiwiY3VycmVudF9vcmRlciI6MTU2fQ==','2015-12-30 16:39:52'),('cguc5j7zun7c4uj0hehx2wgtk13jno22','NzRiNWMxNTVhYWYxMTkzZGVmODEzNTY3YzU5MDYzY2QyMjgyMzQ2Njp7ImN1cnJlbnRfb3JkZXIiOjMzfQ==','2015-09-23 11:55:15'),('cpbl9nzg4h9s3iz0l1emky3s3uq6ejd0','OWUxYWRjNDRhNzE4NmZlOTBlOTg2Nzk3ZDBlY2NkNTZhMTZmY2M1Njp7ImN1cnJlbnRfb3JkZXIiOjUyfQ==','2015-10-05 07:58:01'),('cqtipjrc30he2urk61nf8vaxn66lax11','YzQzZGFlNDhiOTc3NWM5ZjQ5OGZjNDZlNTMxMWIzYjk3ZWI1YzM0Zjp7ImN1cnJlbnRfb3JkZXIiOjEwNH0=','2015-11-09 15:20:55'),('djn5tp5o4ede39z04lledwme0swg5g49','ODBkZjBiNDg2MzYwMzM3YWU2NWUwN2EzYThjM2RiOTdkNjJkNWQ2ZDp7Il9hdXRoX3VzZXJfaGFzaCI6ImZmMGMzMmFmNzdhNTZhOGQ5OTA2ODJkYTU3ZmE5YTQ0MWY3ZTM3MTAiLCJfYXV0aF91c2VyX2lkIjoiNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MzR9','2015-09-30 09:18:40'),('dl6v8qc5t5shc2fqqpmxena92zm54huc','NmI5YzY5OTM2NDc4NDY5NDdhNzI4YmIzNzkxN2IxYWVjNjI3OTRkNzp7ImN1cnJlbnRfb3JkZXIiOjEzOH0=','2015-12-03 16:17:47'),('doimmbrhxu9e0wl3hk0cr0pavaerxl1f','YzI0NGI2OTNhZDQxZDg5YzQ5MTllYzczN2I0ZGJlYTI4YTRhNzM5MDp7ImN1cnJlbnRfb3JkZXIiOjE1MX0=','2015-12-22 16:29:17'),('drhyu373w3prtyxwuok8w8yu0d6h54le','ZTIyNjJiMmJiNjIyMGNiZGIyNzYxZTVjZjk2MmM4ZDlhMDA5N2FiYzp7ImN1cnJlbnRfb3JkZXIiOjIwNX0=','2016-01-31 15:17:27'),('e045aw8c60mzdwuyx4p2qyj6kvabrbtj','NWNhYzk4MjE5ZjUyYmNiYmZhNGNkZjg0NmVjNDI0YjIyMDk2NTMxNDp7ImN1cnJlbnRfb3JkZXIiOjM3fQ==','2015-09-25 08:18:31'),('e3fxq59vir0gq5qupl7p4uyz7q21slgn','ZGYzNzVkNjAzYjAzMTEyZWE0ZjU4Mjk2NmVkMWMxZjg1MDQxZWI4OTp7ImN1cnJlbnRfb3JkZXIiOjgyfQ==','2015-11-09 15:19:42'),('e91gsn17kx6oc0s7hyw3t875etsoskst','N2U4MzFiNTY4NDMwNzdjMjIyNzBmNTE2NWUzZjg3ZDMzNzU4NzNjNDp7ImN1cnJlbnRfb3JkZXIiOjk2fQ==','2015-11-09 15:20:53'),('eht5es5gfu3rkc0c2po5ntw5otsr3cn6','OGIzODFjMGIxZTg1MjA2ZDlmMTAwMjhkM2JmYjlkNjJjYzVmNmY3Njp7ImN1cnJlbnRfb3JkZXIiOjM1fQ==','2015-09-25 07:52:28'),('eyciqk8opsm3attxrd9843uxh7itvwh1','MTc4ZjA1ZDQ5YWQwNDBjNmZlNGM1NDM4ODBjYWY5YmI2NWRkMTcwNTp7ImN1cnJlbnRfb3JkZXIiOjc1fQ==','2015-11-09 14:49:20'),('eyerv083xf54vb5wnka601ypovw3h148','OGM2MTJhZDlmNTFhODQ5ODczNWEzOTczMWYzODk4NzZiMjg5OTcyNDp7ImN1cnJlbnRfb3JkZXIiOjQ1fQ==','2015-09-30 08:30:35'),('ezo45c7nlm8hyhdbpmomkvj73qh2ujo8','MWMxMmZhNjVlZTdiNjk0NWY3M2RiNTM2MDI1MmFhMjU5OGVlMTgxMDp7ImN1cnJlbnRfb3JkZXIiOjIwNn0=','2016-02-05 14:02:50'),('f0xdy771dvm3uj2o7wtf91u5se7e8kp3','MDk0MTZkZTAzZGFjOGEwYzkzOGNhMmZmNmI1ZmJkZTBlZGU3M2NkMDp7ImN1cnJlbnRfb3JkZXIiOjEwM30=','2015-11-09 15:20:55'),('f7r8n2llxpyfwxmega8uy132tolz3inh','MDc3ZjMwNmNhNWE5MTdlMmRmOGJhZWFjMTk5YzU2NTBlMjg0ZDBhNjp7ImN1cnJlbnRfb3JkZXIiOjl9','2015-09-10 15:25:54'),('fhzv4jpig1l82bi9a020ph4llyiocq0r','Nzc4ZjJiYTY3ZjYwNTNlM2VjNzMwOTFjOWYzZmEwMjU0MzM1YTEyMjp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6M30=','2015-10-16 07:20:29'),('frhfo22wz61q5pby5n860j1zywnfm3ar','YjNiMzExNmM4NmI0MTgxZGIwNGZhZWE5NzAwZjJmMjVlNDdjMjdhZTp7ImN1cnJlbnRfb3JkZXIiOjExM30=','2015-11-09 15:22:36'),('fv9lcwezzznrjpypi1xl6xsdfrrw10mv','NWQxMzMyNjA4ODEyODMyNjg0NzFlZjVjMTgyNWM0Y2EwZmJiYzViZjp7ImN1cnJlbnRfb3JkZXIiOjUwfQ==','2015-10-02 19:56:46'),('g41j60ckcw3q7709c1kgn8bolfcktleq','Mzc2Y2JlOTFhMjlhODYxOTZhZjA0MWE3ZDUzM2Y3YzRlNGI0NTE5Mjp7Il9hdXRoX3VzZXJfaGFzaCI6IjNkM2Q2ZTRjY2IwOGRhOGQ1ZGYxNjNkY2M3MDg2OTUwNDJjYWQwODQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-05-31 19:52:02'),('g8yjtwkngkso0kxjln1a5bfqmer6jqlo','OTE3NDViNTllOWNmMjZiOGU4YjUxMmQ5MmViNmE0ZWUxMjVjNDUwMzp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTk0fQ==','2016-01-26 14:02:56'),('gkiunsfmd8x1t7u17igp9jl4k7chexck','NWY4NTU5MmY3NDU4YTVkYWYzMzgyZjIwZmM4ZTgwMmVkN2IxYzdkODp7ImN1cnJlbnRfb3JkZXIiOjMwfQ==','2015-09-22 09:59:19'),('hdedv0nlrrti0j7v8pgl55e73apfwwk6','MTk0ZjMyYzlkNTM2YmQzYzA4MzAzMGJmYzQxOThkNDA3NjBmZWQ4Yjp7Il9hdXRoX3VzZXJfaGFzaCI6Ijg4MmM1OTk4NjI1NWVkYmMyYjM5NDFjYWNiNzlkNjUyOTc3MWYxOWQiLCJfYXV0aF91c2VyX2lkIjoiNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MjE5fQ==','2016-02-21 19:34:33'),('hdzaeab3yx8zcpydwxd5bqdywrouf9yb','Mzc2Y2JlOTFhMjlhODYxOTZhZjA0MWE3ZDUzM2Y3YzRlNGI0NTE5Mjp7Il9hdXRoX3VzZXJfaGFzaCI6IjNkM2Q2ZTRjY2IwOGRhOGQ1ZGYxNjNkY2M3MDg2OTUwNDJjYWQwODQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-06-22 08:00:56'),('hmyvkbh70th1xc7cb1ftsq66gksvknw0','ZWVlOWJlZjY0MzkwYTZmYTcyYjJhZGI3YTA0NTYzYzM3NTYyMmNiZDp7ImN1cnJlbnRfb3JkZXIiOjExOH0=','2015-11-09 15:22:42'),('htu1051j9umwpi7q85nknvya0bs5ip9j','OWY2YWJjMTk3MWE1ZjBlZWIyYjFiY2MxYjIyZjU2MmU0NWY0M2M2ZTp7ImN1cnJlbnRfb3JkZXIiOjExOX0=','2015-11-09 15:22:42'),('i834icnarcb5oim6d8w3ecphq172wnoe','NjczZmE0OWQxZTMzODgwZWU5NzdkYjM1Yzc0NmFiOTcyMjg3OWZiMDp7ImN1cnJlbnRfb3JkZXIiOjEyMH0=','2015-11-09 15:22:43'),('idi4zv4tp735g31uj70dn9wkfxbt8zth','ZjIxZDRjYjQxNmQ2ODgxMTA3MGFmMTQ0NzZmYThmMTEyN2QwZTg2Njp7Il9hdXRoX3VzZXJfaGFzaCI6ImQ1Y2U1MjliMWQ5YTMzNzhjYzU5OGZhZGNlNGQ0OWM3Y2VjYTRjM2QiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiI3IiwiY3VycmVudF9vcmRlciI6MTcwfQ==','2016-01-21 12:33:26'),('ik4n2b5qqg44slamwd2xvtflast9ujby','Mzk2Yjc1NjM2NGQyMGJhNDkxY2U0MGFkYjZmNWQ1ZmZlMDQ2NmZjODp7ImN1cnJlbnRfb3JkZXIiOjY5fQ==','2015-11-03 11:37:38'),('il5s3a0kxrvuhcz0sbpt8q4b6atqrgzz','Y2Q0MzJlYTVjOTI4YWQ0Mzk0NWFlNjM5MjJhZDcwMjNkN2M2YjAyNzp7ImN1cnJlbnRfb3JkZXIiOjE0fQ==','2015-09-10 19:45:26'),('io8cqbeat02cbr1ros9q466fi3h3jp88','MTBkOTQ1ZDY3ZWZkMzA4OWIxMDZjODM1ZWMzMTk2ZWNmNDI0NjY3Yzp7Il9hdXRoX3VzZXJfaGFzaCI6ImY3ZTNhNzI4ZjcyZGU5MjA0NTBkZWIzOGY0NTBjZDgyMjczZGYzOGMiLCJfYXV0aF91c2VyX2lkIjoiMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTg4fQ==','2016-01-26 09:20:03'),('iubc3tctfeealxoxh6f6l0t2xqu2tpo4','NTBiZWJlZWUxZmVkYWQ2NzkxMDdiNjU2NzcwMWVjOGI0YTY4YzFmZjp7ImN1cnJlbnRfb3JkZXIiOjg4fQ==','2015-11-09 15:20:50'),('ix9fkqsf3wvyy3i5pyv8y76aw44m6fei','YWRmOWQwMjU1MDJmNWZjY2U5YTkxYjJlNWQzODNlM2UyOWNjZmQ1MDp7ImN1cnJlbnRfb3JkZXIiOjc3fQ==','2015-11-09 15:18:50'),('iy3ydxej3q3g90nghczc8pcura4mmwv1','N2M4NDk1MjJlYWI1YmYxYjlmYTg5Yjg3OTE3NTdiOTgwMDA1ZGI4Zjp7ImN1cnJlbnRfb3JkZXIiOjEyOX0=','2015-11-09 17:01:01'),('j42oofjlupa86vun0fl410kxs627cc65','YTZlNWRhNWU1ZGRlZjE3YTE5M2RmNGRlOTg2MzRlNzdiMjJmYTEyYjp7ImN1cnJlbnRfb3JkZXIiOjE3fQ==','2015-09-11 13:04:04'),('j48lmng1mr92o6rt8qki9wsmg2yugoj3','ZmExZjBlMTNmMTZjODgyMTYyMzUyZGZiYjI1YThhM2U5MDMwZGE4Yjp7ImN1cnJlbnRfb3JkZXIiOjQwfQ==','2015-09-28 09:11:10'),('j5a5450tf0ovnyzk2t7itcftojpt44ss','N2E0MGNiMzhlZjNiMjAzZDg2MjVmNWFkZmUzNGZmMmNmZDE5YTE4ZDp7Il9hdXRoX3VzZXJfaGFzaCI6Ijg4MmM1OTk4NjI1NWVkYmMyYjM5NDFjYWNiNzlkNjUyOTc3MWYxOWQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiI0IiwiY3VycmVudF9vcmRlciI6MjExfQ==','2016-02-21 17:46:13'),('jabftys90iqy5rn44bqmlp9ekugup8c3','MWViNzM4Nzc2NzAyYjc0NjQ2ZDA4YTg4MGI1OWIyNWIwZDdlYzk5Mjp7ImN1cnJlbnRfb3JkZXIiOjk5fQ==','2015-11-09 15:20:55'),('jarpo6s8lyqt2i6tqehx8acwrtapos2z','YzM1MTAzNTUxYTJlZTI5MGQ4ZjY2ZmM4YzlmOTA1YWJlMDU4ODY2NDp7ImN1cnJlbnRfb3JkZXIiOjIxN30=','2016-02-18 15:15:51'),('jrd984h6vuoruaqq6j4viz2xs9vlejhe','ZTRmNTM4YTgzZTZiNmQzYWY1MTkxZGIwZTdlYmM3YTk2YzNkMGY1MTp7ImN1cnJlbnRfb3JkZXIiOjk3fQ==','2015-11-09 15:20:53'),('jrvan79r451da9vlm6k7x33mibdt0td5','MzZjYjA0YzcxZGRiZDZjOWZmOWRmMWY2NmI4N2YyZTNlYjc0MzI2MTp7Il9hdXRoX3VzZXJfaGFzaCI6IjYwYTgyY2NjNzcxNzQzMDMzNjQ5ZDA0ZDNjZTZkNTI2YjBiMDFiOGMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIzIiwiY3VycmVudF9vcmRlciI6MTU1fQ==','2015-12-29 11:20:42'),('jsfhzmn33l6kxsxmjft2mb4y0hdb3wgk','MjViNTM3YWUwNjZmNWY0NzJjZWFlYTUyOWY5YWQzZjczYzBiYTcyNDp7ImN1cnJlbnRfb3JkZXIiOjQ0fQ==','2015-09-30 08:13:42'),('jwkw50tqhl048yd8o7wueloe6dsbogkb','Y2MzODMwNTU3MzQ4ODFkMjBjMzE2NjQxMzVjMmViODAxOTMwNDI0Yjp7ImN1cnJlbnRfb3JkZXIiOjIxOH0=','2016-02-21 16:25:06'),('k4egvxslusu7gcwn76tbh0sak9vm3qlo','NWU5NzZjNGE5ZWY4MDRlY2QwMzI1MDQyZjY5OWMwY2NiZWU2ZmYyNjp7ImN1cnJlbnRfb3JkZXIiOjkwfQ==','2015-11-09 15:20:51'),('k8opyeyojzx2w3mwl9w0alxh8fudlpg9','NGQyMjk2M2QxZjlkNGNmN2M5OWMzNGRmMDM5MmI2MjZlZGRkOTVjNzp7ImN1cnJlbnRfb3JkZXIiOjQ2fQ==','2015-10-01 11:30:44'),('kmdz6ojpm5vsl4umpinqme7mcj2fq0h0','YTM2NTlmMmY0NGYzYmFkOWQ4ZmIxNzFiNjU4ZThiMWEyMmVhZDE0Yzp7ImN1cnJlbnRfb3JkZXIiOjEzMH0=','2015-11-09 17:07:54'),('l2hcltpjj9673vuhlufr3bldgvah627k','OGU1NzE2MjA2ZTQ1MTBlODZjZjlhZjllYTMzNDRmNzlmOWI4MDc1Zjp7ImN1cnJlbnRfb3JkZXIiOjExNn0=','2015-11-09 15:22:38'),('l3adzj4fiom6pyyo6wreim4wbwoqunpw','MjJmMjY1OTUxM2FhYmY0ZDIzNTQ1YjE3YjVmNjlkODg1YjAxM2E1NTp7Il9hdXRoX3VzZXJfaGFzaCI6IjYwYTgyY2NjNzcxNzQzMDMzNjQ5ZDA0ZDNjZTZkNTI2YjBiMDFiOGMiLCJmaWxlcl9sYXN0X2ZvbGRlcl9pZCI6bnVsbCwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2lkIjoiMyIsImN1cnJlbnRfb3JkZXIiOjIxNH0=','2016-02-18 14:48:01'),('la7wj7cxtbcdv49a6vxza7as19m0hlh4','NDRkYjgxZjY3ZGIxOGUxMjkzZDg3Mzg4NDE0M2VhYzliYzUxNTlmNzp7ImN1cnJlbnRfb3JkZXIiOjk0fQ==','2015-11-09 15:20:53'),('lfiabdjddza017x3deosk985bwtypnp8','OTNkZWQ1ZmRlZDYwMzg0NTA2MjA2NTE3MjZjN2QzMGZhNGQ2YmVlNDp7ImN1cnJlbnRfb3JkZXIiOjUxfQ==','2015-10-05 07:58:00'),('lfm82iy0bfbeb77eckqhp7xzwcasbfas','Mzc2Y2JlOTFhMjlhODYxOTZhZjA0MWE3ZDUzM2Y3YzRlNGI0NTE5Mjp7Il9hdXRoX3VzZXJfaGFzaCI6IjNkM2Q2ZTRjY2IwOGRhOGQ1ZGYxNjNkY2M3MDg2OTUwNDJjYWQwODQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-05-31 19:36:49'),('lkq5bmijukuo9ywk20kseafgxma31r64','N2JhNDIwMGIwNWI3N2EwODY5NzAwZjUyZDcwYmU0YzJhMDFjZDlhYjp7ImN1cnJlbnRfb3JkZXIiOjI5fQ==','2015-09-17 08:31:49'),('m2zrrzo85jtquxf73st30obt9ensr6l2','OTNlNTFiNzgzNDJkNGYzZGVmNjdjYWI5MmY2ZDM0NTZmY2ZhNWM4YTp7ImN1cnJlbnRfb3JkZXIiOjQ3fQ==','2015-10-01 11:30:44'),('m9gax63mmn9k1dt1zumhfm62yf4yozg0','MzliNTgyODZkMmQyOWNkOGNjZTkzY2YwMDg1MTk0OThhZThkMmY4Zjp7ImN1cnJlbnRfb3JkZXIiOjQxfQ==','2015-09-29 12:16:15'),('m9hb8tta7dzsgm7vy5nxkfgvv0ji1sa8','YWI2OTVlM2JmZGQwMzYzNGZmZjlmYTgzYjNhZmEzZDIwZWQ4NWNiMDp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJmaWxlcl9sYXN0X2ZvbGRlcl9pZCI6bnVsbCwiX2F1dGhfdXNlcl9pZCI6IjEiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsImN1cnJlbnRfb3JkZXIiOjE5N30=','2016-02-19 16:16:53'),('mawqljnud58jqyvq5gxgt4125dvxdkn6','ZWY2ZWViOTYxNWY2NDYyYTRiODgwOWM3MmM0MzZhN2ExMzRhN2NhMDp7ImN1cnJlbnRfb3JkZXIiOjE5OX0=','2016-01-26 18:27:59'),('mpxla2jv769unjrykvywn55kuwncvuw8','MDFjZDlhZTM0ODZiMGE3NDI5ODZkNDgwMDg5MDY1YTNmNzUzM2Q0NTp7ImN1cnJlbnRfb3JkZXIiOjc4fQ==','2015-11-09 15:19:17'),('mr1oefobox55zc40znzofplhzeo4yt35','NzMxMjQ4ZjlmNzFmY2VkM2VmNTkzOTMxMTUxNmM1YjMwMzg5MjEwYTp7ImN1cnJlbnRfb3JkZXIiOjE3OH0=','2016-01-21 15:57:48'),('mrjmfp6mpabafdxwc99u8pjhxtuuuqgt','NGUzNDVhZTA4ZWZkZjY5MjBjMzFhNjdkZWMyN2RiOWU3ZTIyNGIyYjp7Il9hdXRoX3VzZXJfaGFzaCI6ImY3ZTNhNzI4ZjcyZGU5MjA0NTBkZWIzOGY0NTBjZDgyMjczZGYzOGMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIiwiY3VycmVudF9vcmRlciI6MTQ0fQ==','2015-12-30 12:47:07'),('mrxrdu972pobmszrvghzuouxrq15xmow','Y2E5ZDg3Mjg5ZTIyMjQ0MGMzNzc0MmIzZjJmZjU4NWRhZjQ1ZjRlYTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMzkxYjBiNjAyMGFmMTBkMGFmMWZjOTNhYjE5ZjdmZDY0NzI5OGRiMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiZmlsZXJfbGFzdF9mb2xkZXJfaWQiOiI2IiwiY3VycmVudF9vcmRlciI6NTd9','2015-11-14 13:51:45'),('mtzg4j0jratqu4zmdw5i79703bg1eggy','ZmNiZjMxNmMwZGY1MmU2NzFjMWFlYTNhNWZjNTg0YzcyNzI0ZGYyNzp7ImN1cnJlbnRfb3JkZXIiOjU0fQ==','2015-10-09 13:02:01'),('mwsq1iem58w8sbzuxoyqw0nayev85k1w','NzA0Yjk3YjM1NGI3NmNkMjQxODA3OWVjY2IwYjc3YWFiZDVjODRkMjp7ImN1cnJlbnRfb3JkZXIiOjcxfQ==','2015-11-05 15:13:08'),('n9297u85gdlw1qb47zhslbo2rzjo609r','Njk4MmJlMzEyYTQ3OWZiOWJiMTQ3MTU1NzkzMjlhNWZjZTRjY2I3Mjp7ImN1cnJlbnRfb3JkZXIiOjc5fQ==','2015-11-09 15:19:17'),('nijurkutlbbioqklpiv6kjhrbbwov6e9','NjdiNWZlNjQ4NTViNzQ3YmIxNmIzZjUxZGQ0OWQyMzY3Y2ZmYjBhYjp7ImN1cnJlbnRfb3JkZXIiOjE4Nn0=','2016-01-25 13:50:39'),('nsx012esionl9ugvsa7p2uyxunailh6g','N2QwOTA4ZDUwMzhhYjJkYWYxYzJlNzA5ZDRmMzM3ZTkwN2QyYjkyOTp7ImN1cnJlbnRfb3JkZXIiOjEyNH0=','2015-11-09 16:58:55'),('obeg1htwcjvftctrplmxek2be2awstaj','MDAwYmNmMWIzM2MyZmFiOTc4ZGRmZDBmODFmNjkwZTY2ZTA3NzVjMzp7ImN1cnJlbnRfb3JkZXIiOjIxMH0=','2016-02-17 14:48:59'),('ocfb1sinplwb85zxzcz67e194c4m2cxq','M2M4NDBmNDVmNTI3ZGRjNzA0NjE3MWVmMGVhYjNmMmRlNzgwZmUyNDp7ImN1cnJlbnRfb3JkZXIiOjExN30=','2015-11-09 15:22:38'),('oek5rp2cgd4eac7s8fpezcfygb5t0jb5','ZDNjZTRhZGY2MTUzMzAxY2EwYmFiNmIzMDU0MTI1MTI0MzViMzdiYjp7ImN1cnJlbnRfb3JkZXIiOjE2N30=','2016-01-19 15:26:14'),('olufnrm8usdl412c4imnb75qcogz797n','ZjFkMDdiN2Y0MjM3YjI3MmFiZTFkYTMxYWFmNTM5OWNiOWIxOGE0Njp7ImN1cnJlbnRfb3JkZXIiOjEwMX0=','2015-11-09 15:20:55'),('ov5gqsm2i0ify1zwd3dqdgi0ltrw0mw7','MmM2MGUzYTQwZTBhYmRjYjk2NmZmZDA4MDFjM2RhMzg0YWFmZmYxODp7ImN1cnJlbnRfb3JkZXIiOjk4fQ==','2015-11-09 15:20:53'),('oy2cbvzbbt3e2qgtrp31y39ge1x0al0r','ZTc1NTc4MzU5MzU5MDQ4ZmNmZWEwODlmMmM5NmRlZjY2NGYxYjZjZjp7ImN1cnJlbnRfb3JkZXIiOjE2MX0=','2016-01-13 11:47:51'),('p1wg8auzr8hduo3txs9d23cl5evx6qiz','NjQ2MmMwZWI2NDA2MDlmOGQwYzkzYzQ5OWY3ODBjNzkyZjc0OWViZTp7ImN1cnJlbnRfb3JkZXIiOjQzfQ==','2015-09-30 08:13:42'),('p3c209ty55s1va4piifkhy00rqs4458q','NmM4ODEyNzQxYzZmYzgxZGE0MzFhNGM2MTE2MmYxMDA2MjA4MmM2NTp7ImN1cnJlbnRfb3JkZXIiOjExNH0=','2015-11-09 15:22:36'),('pjhz8kh4xiv2q7xevsct63hozbng1bqs','ZDBhNDg1YTM2MmZiOTdkYjk4OWM0OWYxYmRjM2I4ZmNhMzdhM2UwZTp7ImN1cnJlbnRfb3JkZXIiOjE5M30=','2016-01-26 10:40:12'),('pw6s2eczpu1pvuz16fs88h44p4jvej5v','MzcyNGMxMzk3YjE2MWEyMzZmZWUyNzEwYWUxNzQwMjk2MzQwNzU0YTp7ImN1cnJlbnRfb3JkZXIiOjI2fQ==','2015-09-16 09:57:34'),('q2mqpv7m75c1qhlyjak6ublfusm04c0d','ZGE0YmZiNGQ2YjdkYzc1MDgwZGFlNDk0YzA2MmIwNzQ0ODBmNDEzZjp7ImN1cnJlbnRfb3JkZXIiOjE2NX0=','2016-01-19 09:52:35'),('qa5vzsb83yemi0i8to8uhogcfwod8lzm','ZDY0YWY2ZDJmZDdjMzY4NzllOTkwZDk1MDkwYWEwY2I0ZTM4YjU3OTp7ImN1cnJlbnRfb3JkZXIiOjEyOH0=','2015-11-09 17:00:59'),('qc9o1bvm1iliuc3mkmhovwnos4wb7c1f','YWViYzIzMjAxNTdhOTQ3MWE0MWY3MDEwZTI3MGM2Y2Q3NjE3ODE4Zjp7ImN1cnJlbnRfb3JkZXIiOjE1Mn0=','2016-02-18 14:57:50'),('qcauclmwhfdnymqz31hyotye9rh4oebx','MGYwN2M4ZmFhMjMxOWMzYWY0ZTNiODQ2MmRhYjU1MmFjNzE1MTAyMDp7ImN1cnJlbnRfb3JkZXIiOjEzM30=','2015-11-24 12:41:08'),('qpzkj20wph3q8565ttgycugo7chj2ira','NjMzNDU3MzZiZWUzNWI3MzhhMDUzNTM3NGI5ZTdiZGRiNzVlNmM5NTp7ImN1cnJlbnRfb3JkZXIiOjEwNn0=','2015-11-09 15:22:32'),('qssazw6jicyni997dp3yb0ai8fswvgwz','MDI3NmQ3MjE5Y2ViN2JkYmM5Njk3M2MyMDYyYWFiODdlNjIzNTY0Yzp7ImN1cnJlbnRfb3JkZXIiOjIwN30=','2016-02-05 14:02:51'),('qwbuxyl3xanohiwtceyogdup4rdyynam','NmFhNjkwZDYwZjcyZDIxMTYyYWFmMTU1OTY3Mzc2OGVmMDBhNDVlNjp7ImN1cnJlbnRfb3JkZXIiOjU5fQ==','2015-10-19 16:49:38'),('r1npb3e81apkk2abt4f2at8sl70ryn8m','MzA2ZTE5MDY3YjU2ZTg3NWFiYWZjMzNlYzdmYmQ1NTI3NmJlYzk0Mjp7ImN1cnJlbnRfb3JkZXIiOjE2Mn0=','2016-01-13 11:47:51'),('r4x16nmprwpripu2gbk9giocrskcp0zp','NGNlYWU0NDQwZTU5MWY3MDkzZjg5ZjllY2JlODI5NTIxY2VlZTVlYTp7ImN1cnJlbnRfb3JkZXIiOjEzNH0=','2015-11-24 14:28:18'),('r69h0bq1glz5khkz090zr3ki4dx8wlx8','OWI1ZDkyYWFiNjYzNWQ0MDBjOTBlZDJhNjMzMTljNDQ0MTE3ZWYxYzp7ImN1cnJlbnRfb3JkZXIiOjIwMn0=','2016-01-29 11:03:48'),('r7hxrzigv41sqcwb8ubkgxxpm4u4ovui','ZjA4NTg4NjI5ZTZjZWZiNTczODY3YWRiMGNkNmJkMGE1NDZmM2VjMTp7ImN1cnJlbnRfb3JkZXIiOjgwfQ==','2015-11-09 15:19:20'),('r8rc45xsgcl9vqvaeono4dal1tzfqbxf','N2M0YWNkYTZiOTUyZTI5YTA1ZTFlNjBiYTNlNDMzMTU0ZjY3NGNkZDp7Il9hdXRoX3VzZXJfaGFzaCI6IjQ5NTU0N2ZhMjU5ZmFmNjVjOTNlMzY3ZDVkYTI5ZDkyNjQ2MTA3ZmEiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIn0=','2015-07-16 12:12:14'),('r9itg411k2dy1wvdh7a11rqvovtgmgfc','YmEwZTM5ZGFiODczMWYyNTk1ZmI4NzgzOTc1YWM3MTM4NWE5NmFjYTp7Il9hdXRoX3VzZXJfaGFzaCI6IjM5MWIwYjYwMjBhZjEwZDBhZjFmYzkzYWIxOWY3ZmQ2NDcyOThkYjIiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6NTV9','2015-10-16 15:19:04'),('radlndopnblp7pth6slpvy80e798p37d','ZGYyMTJiZTI3ZTNiNDc0NGQ5YmEyNzMxYTk5NzRhOWIxNThiNTRmMDp7ImN1cnJlbnRfb3JkZXIiOjY0fQ==','2015-11-02 18:57:23'),('rfbcm242gum1gneynsboia5rw0qpg52d','MzM2N2FjMDk1M2EwODBkYjYyZjU3ZmFkOGVjY2U1Zjc3ZTM3NjQxODp7ImN1cnJlbnRfb3JkZXIiOjgxfQ==','2015-11-09 15:19:20'),('rgewgr22k9glah5vzw5qi1a8cf76oqih','NjMxYmE1NThjYzFjZWFiZTVjNDgwZDFjOWYyZmQ5N2Q0YzdhZGY4Zjp7ImN1cnJlbnRfb3JkZXIiOjkzfQ==','2015-11-09 15:20:52'),('rn4e7bfj91xfrxe0vqjflidqs4bnbvsy','NWRmNGRmY2YyMzYxNjkwMmQ3MmQxZGY0MGY0NDczMTEzNjlhYTJlMzp7ImN1cnJlbnRfb3JkZXIiOjE5Mn0=','2016-01-25 15:36:27'),('s5gwzp7e0j6iet8n1r6v7iof7da7rios','YTM3OTgxMzVmN2EzNzc4MWE2N2QwNTkwMzRkMDYzZWEwNDVmMjRiNzp7ImN1cnJlbnRfb3JkZXIiOjEwNX0=','2015-11-09 15:22:32'),('sdq5m3dxfz3d30evs5wr3vdjp0c8erdg','Yjc4NTc4NGZmYjNlNjc3Mzg2MDgwMzRmOWJiZGYxNGM5ZTk0ZWNkZDp7ImN1cnJlbnRfb3JkZXIiOjY3fQ==','2015-11-02 19:01:25'),('slh67pk232wv9knuvqh99664dh1ty2nq','YTJmZWJjNGNmNjg5OTI2ZjU4MTJkNWFhOTIyMmM2ODVhOTk5NmQ2Mzp7ImN1cnJlbnRfb3JkZXIiOjg0fQ==','2015-11-09 15:19:59'),('snny9voxxpu626tixnxmg259p2lzq6gg','MDVmYmNjZjE4NWRhYTE5YjMwOWRhNDk3ZWVlNmQ4NjExNDQ3ZTg5MDp7ImN1cnJlbnRfb3JkZXIiOjI3fQ==','2015-09-16 09:57:34'),('soekvet67l19inastzqhxibw2v4zea1r','ZGY0ODIxODJmODU4YTRlMGQ1ZjdlZmY4ODJkOTU1OThmZjIxMGYwYjp7ImN1cnJlbnRfb3JkZXIiOjEzMX0=','2015-11-09 17:09:09'),('ss0o35adovijlph42dc1vppnt7ibu7qx','MmU4MjZkOWNhOTIwMGZhNWIwNTMyMGI0ZDQxYTU1Y2QzYjBiZGY1NDp7ImN1cnJlbnRfb3JkZXIiOjIwNH0=','2016-01-31 15:17:27'),('sypxxig95sndrb9vye7ajgtq7bmw5hmf','NDE4YzI4OTNjYjgxN2MwNWYxNzJiMWM0ZjlhMmMyZWI1OWM5YWVhYzp7ImN1cnJlbnRfb3JkZXIiOjExNX0=','2015-11-09 15:22:38'),('tc6ifdfoy21akrru6jhmvdxgepjwuir8','MTM4OGZkNDBhZGRhZjk3ZDg3ODFmMGIxMGU4NjgwNjkwNWE0MTljNDp7Il9hdXRoX3VzZXJfaGFzaCI6IjYwYTgyY2NjNzcxNzQzMDMzNjQ5ZDA0ZDNjZTZkNTI2YjBiMDFiOGMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIzIiwiY3VycmVudF9vcmRlciI6MTUzfQ==','2015-12-28 16:21:34'),('tk3k9kksgkbf06agvwthtbryt9nqh25e','Y2JhOGI4NmVkOTM3ZjIwZDQ1ZWU0ZGZmYjY2ZjU1NGM1NjI5Yzc5Nzp7ImN1cnJlbnRfb3JkZXIiOjEyMn0=','2015-11-09 16:44:30'),('tpld3w91xl8gf30ivqrjzkpsspwmjdog','YTAwOThjYmRhMTA3YmYxNTc2YjA1ZGVlMGM2YmE0NTViOGNiZjI3MDp7ImN1cnJlbnRfb3JkZXIiOjE2fQ==','2015-09-11 13:04:04'),('ttubkdazd4w5mdtysczv1ust7yelt5t9','Nzk5NDQ5YzkwMmU2NTM4NTgxYmFhMTA0NzNlNjQwNTg2MjhkOTNmYjp7ImN1cnJlbnRfb3JkZXIiOjExMH0=','2015-11-09 15:22:34'),('ui8by0pgfwbzu4a68mjkzfecqzy4pwyo','MjM5YzVlNGY1M2ExYzZiNTIyM2Q4OTcyMTExOTc2MmUwZGQ1ODc5YTp7ImN1cnJlbnRfb3JkZXIiOjIyfQ==','2015-09-14 08:16:54'),('uv92zrpr7n1c9hfu8203ng5zd82nj8js','NmU3OWM5MzJkZGZkOTIyMjgwODI4ZjBlMzJjODM2ZDdhZTUwMzE4ZTp7Il9hdXRoX3VzZXJfaGFzaCI6ImY3ZTNhNzI4ZjcyZGU5MjA0NTBkZWIzOGY0NTBjZDgyMjczZGYzOGMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIiwiY3VycmVudF9vcmRlciI6MTM5fQ==','2015-12-05 13:17:12'),('uwdhb48vsng3meyb1txlu887qyds3mtp','YWQ2ODA1NTViYzNmYWI2ZGRiN2Y3MzMxMjUzMDY2ZmUyODZjYWZmMDp7ImN1cnJlbnRfb3JkZXIiOjExMn0=','2015-11-09 15:22:36'),('uy4hzvipqy5d0d4f5jw5cl0rvzr5f7d9','MTVkYjNkNGY1NWZhNWIzYzRmYzcwYjAzODE4NjU3Yjg1NzhlOTNkYzp7ImN1cnJlbnRfb3JkZXIiOjEzMn0=','2015-11-21 18:34:47'),('v05cu535gyrga5i6hw9oq3bp12g956m4','NTFiMDZlZmMxOTkwNDFiODkwNWY2YzRlYjRkMTgwOTczNjg0MzczNzp7ImN1cnJlbnRfb3JkZXIiOjkyfQ==','2015-11-09 15:20:52'),('v37wya7358budw08rq7h6igf6e99mgaw','NTUwODNmNDg5ZjU2OTYyOGZmNjdhMTY2YWJiYTY0YjNlMzAyNWYzYTp7Il9hdXRoX3VzZXJfaGFzaCI6IjYwYTgyY2NjNzcxNzQzMDMzNjQ5ZDA0ZDNjZTZkNTI2YjBiMDFiOGMiLCJmaWxlcl9sYXN0X2ZvbGRlcl9pZCI6bnVsbCwiX2F1dGhfdXNlcl9pZCI6IjMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsImN1cnJlbnRfb3JkZXIiOjIwM30=','2016-02-09 15:16:38'),('vegl0nhy5w5x08qwqzglaadxng0swi2l','ZDBhMzlkNDY3NDc3NDIwN2QzYTVmZTcxZmY5MjU5YTViMzE5MDRiZjp7ImN1cnJlbnRfb3JkZXIiOjEyNX0=','2015-11-09 17:04:59'),('vj2qde51meaojyjfto7p8so68lnd4ph2','ZDhmNWIxNTE4ZTAxZmNlMjk0YzJjNTFjNTFmODM2ZmNlODY4ODc2NDp7ImN1cnJlbnRfb3JkZXIiOjMyfQ==','2015-09-23 11:55:15'),('vpm1btvpjijjh90tfl3ht37h1tipdmt9','MWE0YzMyZWZkNmM5ZjBjZjNkMzBkNjhhMzA0NTkwNGVhYjZlYjYzZTp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiM2QzZDZlNGNjYjA4ZGE4ZDVkZjE2M2RjYzcwODY5NTA0MmNhZDA4NCIsIl9hdXRoX3VzZXJfaWQiOiIxIiwiZmlsZXJfbGFzdF9mb2xkZXJfaWQiOiIyIn0=','2015-08-25 13:32:21'),('vqpmkwkrmy6bgwz4tc81egi70rzq5bxd','ZGM2NTkxZTBlNzBkYmQ4YWQ1ZWQzMmM1YTdlNGI5MjU4YmViZTQyNjp7ImN1cnJlbnRfb3JkZXIiOjMxfQ==','2015-09-22 09:59:19'),('vuqvhzylbzn6amqtkbzgmpa24uztw8ck','ODlmNWY3N2VkMWIxNDY1YzA0Y2Y1MGMxZTMzZjAwZTgyYWRjY2RkYTp7ImN1cnJlbnRfb3JkZXIiOjIxMn0=','2016-02-18 15:14:20'),('wkr4n5vqqbdo6ncytq0ibv1edl2rqv6s','YWVkZTYwZGU1YjdjYTdiNzI5ODVkNDI3NWIwNDJhMjQ4NGU1Y2U0Nzp7ImN1cnJlbnRfb3JkZXIiOjIxNn0=','2016-02-18 15:20:32'),('wpcgfswhtaqgr31kgpicuwr6psq7i00w','OTg3ZDkwNWI4M2RjYWUyNmZjNjBhNDAwZGM2Y2M2YTgxN2FmMmUxMzp7ImN1cnJlbnRfb3JkZXIiOjE1OX0=','2016-01-12 09:55:26'),('wwesctdqyh5uh5l1ovu57wcy3ozcznvi','OTI1YWFiNDNlYzMzNzU1NmY0Y2E3YmE1YmQxZWM4MWVlZGRiM2MwYjp7ImN1cnJlbnRfb3JkZXIiOjczfQ==','2015-12-04 11:06:31'),('wxen1cqbw8dzac0p54rfndfs6lisjbi3','ZTk4NmRmMjBmMDJjMjAyYjMwMmU5OGE2ZGZlMTlmYWUyYWE0NmIwOTp7ImN1cnJlbnRfb3JkZXIiOjE5MH0=','2016-01-25 14:13:33'),('x7qw535raplpiw5a365qtdzd4a1ipxlk','ZDEwMTA1ZjUwYWUyZDM4NjcxODM0OWQwMGQ0MzI4YWJhYjMzNzI3Yzp7ImN1cnJlbnRfb3JkZXIiOjE1MH0=','2015-12-22 16:29:17'),('xapksup320wl23exxc4hzvve4zglfou1','ZDMzZjgyMzdlOTViZmQyMTkwZjZlZjZjYWJlNmI3MGY2NWYyODdhMDp7ImN1cnJlbnRfb3JkZXIiOjc2fQ==','2015-11-09 15:18:50'),('xnokm23ftc9uznbl4x80ahp4l1huf9sn','YjA2YzU4NzM0YzIzZTNlOTEzNjRjNjRjZDI3YWFjNDYyZjFmNmYxOTp7Il9hdXRoX3VzZXJfaGFzaCI6IjU4ZDkwYmEyZDI2NzI4M2EyNzViYTU4YjMxMDA1NTIzZWNjOTY3M2EiLCJfYXV0aF91c2VyX2lkIjoiMyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTJ9','2015-09-14 08:22:06'),('xw3s5bq1l9nhy0asxsr59agycc1ij2cf','ZDkyYTc5ZTMyNTYzM2I5Y2E2MWYwMDhmMmE2MzBmNjVkMzBmOGRiYTp7ImN1cnJlbnRfb3JkZXIiOjE4Mn0=','2016-01-23 18:46:07'),('xxa41kqa5378r6twyrb422yedi4vu8kb','Yjg5ZjQ1YTA4YmY2YmRkNTY0ZWY0NTRjMjk4YWRmOTViZGZkN2U5Mjp7Il9hdXRoX3VzZXJfaGFzaCI6IjhjOWZhM2QzOWQwZDY0NmMyNTgzZjNiMDZkYjA5MWM3ODU4NTUyOTAiLCJfYXV0aF91c2VyX2lkIjoiNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiY3VycmVudF9vcmRlciI6MTk4fQ==','2016-01-26 18:30:11'),('xyocozldyfprbcvbszi7nygaypmtboe6','MmIzY2RkZjdjNjA2NTVmNjBjYzEzODljYWY5ZjI2ZjQzNjA3OWU3OTp7ImN1cnJlbnRfb3JkZXIiOjYwfQ==','2015-10-24 15:46:38'),('y7xb9m5ss83fzdwrhzoyd6kt5ylf0ofg','NjRjOTYyNzcxMDIwYWQyZGVkNDVkYmM1MGZiY2MxNGNiMDAyZDdmZDp7ImN1cnJlbnRfb3JkZXIiOjE0OH0=','2015-12-22 16:28:02'),('y8wrzbegm1cyf0z06xya9eaw06a97q73','ZmRhNzllNzRkYTJlOWUxZGI1ZWVhYTNmMTExNDBmMmM1YzU2N2ZhMTp7ImN1cnJlbnRfb3JkZXIiOjEyN30=','2015-11-09 17:07:55'),('yd4d6phr4lzedcww2h4mdpzudxe5z2yy','YjkyNjcxYTAwZjE1ODc2YmQyYTY1OThlZDQ2MDFlNWFlMDFlYTc4ZDp7ImN1cnJlbnRfb3JkZXIiOjQyfQ==','2015-09-29 12:16:15'),('ylhweg2q3mi1vvyuoe10fmlcueznkln8','ZmQ3MDkwYjIyZjVmYTY2MmRjOThiMmE4ZTFmYjY1OTJiNmYyZThjNjp7ImN1cnJlbnRfb3JkZXIiOjE0Mn0=','2015-12-15 19:04:07'),('yod4ohlg2pfelkigplrjrdse7zwu6r25','Y2I3YjUwNTQ4ZDdjMDFhODI3ODJlM2JjMDJiYjg3NGZmYWIxNGJhNDp7ImN1cnJlbnRfb3JkZXIiOjQ5fQ==','2015-10-02 00:40:55'),('yp4csx0kb34ywofefg09igrqg0zoalvt','MzBkOWRmYmZjZmNiODkxYTUxODI1ODA5ZTM5MjMwMjFjOThmMmI2MDp7ImN1cnJlbnRfb3JkZXIiOjM2fQ==','2015-09-25 08:18:31'),('yuaunh37snjcd3lyob8fgmb6t7op5z80','NjFiMTc3ZGQyNjEzYTE3Y2RlOGM3ZWNjYTFkM2Q0OTM3ZjRmZmE1ZTp7ImN1cnJlbnRfb3JkZXIiOjEzNX0=','2015-11-28 21:06:23'),('zipwohsgjydeuyntpc71qnpybnh6r5gm','Yzg3MTVmNGNjZmFkYzgwZjlkNTFiZDI4NjI2MDlkYzgyMTg4NGIwMjp7ImN1cnJlbnRfb3JkZXIiOjY4fQ==','2015-11-03 11:37:38');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `easy_thumbnails_source`
--

DROP TABLE IF EXISTS `easy_thumbnails_source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `easy_thumbnails_source` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `storage_hash` varchar(40) NOT NULL,
  `name` varchar(255) NOT NULL,
  `modified` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `easy_thumbnails_source_storage_hash_40116450c1e4f2ed_uniq` (`storage_hash`,`name`),
  KEY `easy_thumbnails_source_b454e115` (`storage_hash`),
  KEY `easy_thumbnails_source_b068931c` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `easy_thumbnails_source`
--

LOCK TABLES `easy_thumbnails_source` WRITE;
/*!40000 ALTER TABLE `easy_thumbnails_source` DISABLE KEYS */;
INSERT INTO `easy_thumbnails_source` VALUES (1,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2015/06/29/CS01_DSC_4414.jpg','2015-06-29 18:48:52'),(2,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/06/74/0674b943-8d01-4f85-9525-0660fb1cdf61/channel.png','2015-08-08 14:13:36'),(3,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png','2015-08-09 13:03:32'),(4,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png','2015-08-09 13:03:52'),(5,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg','2015-08-09 13:02:32'),(6,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg','2015-08-09 13:02:59'),(7,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/1f/1a/1f1a786e-1b79-4716-87c2-17ef48268597/1050702938_rllz_red_1.jpg','2015-08-26 19:07:15'),(8,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/10/57/1057a3d1-a364-48ab-b2e1-24f20b19845b/1050702938_rllz_red_2.jpg','2015-08-26 19:08:06'),(9,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/0c/04/0c049c9c-b08b-4a83-ad11-ea4fd37bc70b/gucci-gg-logo.png','2015-08-27 19:14:09'),(10,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/f8/46/f8463b56-4ffb-4904-87a9-2f900135e71f/388650_zfz19_1230_001_web_full_new_theme.jpg','2015-08-27 19:16:23'),(14,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/f2/c1/f2c1f13f-d300-4548-957f-8dffe6b73d6a/1.jpg','2015-08-27 19:28:12'),(15,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/24/a9/24a9b045-bcfc-4e76-a228-722905894d4b/2.jpg','2015-08-27 19:28:12'),(16,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/fe/09/fe096cf5-aa6e-445c-8508-511e9e769c27/logo.png','2015-08-28 16:57:19'),(17,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/9d/51/9d514c7d-c295-4b02-b97d-20bc80018f02/screen_shot_2015-08-28_at_100027_am.png','2015-08-28 16:59:10'),(18,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/5f/76/5f768565-7e05-4d1d-9ba0-1a805d79ba4f/screen_shot_2015-08-28_at_100037_am.png','2015-08-28 16:59:10'),(19,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/e7/ce/e7ce7516-16d4-4db1-bad6-04576e0691ed/screen_shot_2015-08-28_at_100051_am.png','2015-08-28 16:59:10'),(20,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2015/08/28/Hospitality-with-Events-Management.jpg','2015-08-28 17:15:53'),(21,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2015/08/31/2014-01-03_01.46.54.jpg','2015-09-12 16:01:16'),(22,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg','2015-08-31 11:03:44'),(23,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg','2015-08-31 11:03:56'),(24,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg','2016-02-04 14:41:15'),(25,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg','2015-10-01 08:27:27'),(26,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2015/12/09/ani_pic.png','2015-12-09 17:51:30'),(27,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2015/12/09/ani_pic_LdszQP4.png','2015-12-09 18:08:00'),(28,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2015/12/10/practice-pic.png','2015-12-14 15:33:42'),(29,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2016/01/11/DSCF0269.jpg','2016-01-11 15:41:05'),(30,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.23.37_AM.png','2016-01-15 11:15:05'),(31,'f9bde26a1556cd667f742bd34ec7c55e','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.32.01_AM.png','2016-01-15 12:00:10'),(33,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png','2016-01-15 11:59:01'),(38,'f9bde26a1556cd667f742bd34ec7c55e','filer_public/fb/14/fb148eb7-b06d-44bc-9ab5-4be9524e5c1f/screen_shot_2016-01-15_at_115625_am.png','2016-01-15 12:03:44');
/*!40000 ALTER TABLE `easy_thumbnails_source` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `easy_thumbnails_thumbnail`
--

DROP TABLE IF EXISTS `easy_thumbnails_thumbnail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `easy_thumbnails_thumbnail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `storage_hash` varchar(40) NOT NULL,
  `name` varchar(255) NOT NULL,
  `modified` datetime NOT NULL,
  `source_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `easy_thumbnails_thumbnail_storage_hash_66cc758d07ef9fce_uniq` (`storage_hash`,`name`,`source_id`),
  KEY `easy_thu_source_id_50b260de7106e1b7_fk_easy_thumbnails_source_id` (`source_id`),
  KEY `easy_thumbnails_thumbnail_b454e115` (`storage_hash`),
  KEY `easy_thumbnails_thumbnail_b068931c` (`name`),
  CONSTRAINT `easy_thu_source_id_50b260de7106e1b7_fk_easy_thumbnails_source_id` FOREIGN KEY (`source_id`) REFERENCES `easy_thumbnails_source` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `easy_thumbnails_thumbnail`
--

LOCK TABLES `easy_thumbnails_thumbnail` WRITE;
/*!40000 ALTER TABLE `easy_thumbnails_thumbnail` DISABLE KEYS */;
INSERT INTO `easy_thumbnails_thumbnail` VALUES (1,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/06/29/CS01_DSC_4414.jpg.300x300_q85_detail_upscale.jpg','2015-06-29 18:47:39',1),(2,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/06/29/CS01_DSC_4414.jpg.793x407_q85_box-233,38,1026,445_crop_detail.jpg','2015-06-29 18:48:52',1),(3,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/06/74/0674b943-8d01-4f85-9525-0660fb1cdf61/channel.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-08 14:13:36',2),(4,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/06/74/0674b943-8d01-4f85-9525-0660fb1cdf61/channel.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-08 14:13:36',2),(5,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/06/74/0674b943-8d01-4f85-9525-0660fb1cdf61/channel.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-08 14:13:36',2),(6,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/06/74/0674b943-8d01-4f85-9525-0660fb1cdf61/channel.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-08 14:13:36',2),(7,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-08 15:50:08',3),(8,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-08 15:50:08',3),(9,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-08 15:50:08',3),(10,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-08 15:50:08',3),(11,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-08 17:26:00',4),(12,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-08 17:26:00',4),(13,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-08 17:26:00',4),(14,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-08 17:26:00',4),(15,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',5),(16,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',6),(17,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',5),(18,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',6),(19,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',5),(20,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',6),(21,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',5),(22,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-09 12:36:22',6),(23,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg__210x10000_q85_subsampling-2.jpg','2015-08-09 13:02:32',5),(24,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg__210x10000_q85_subsampling-2.jpg','2015-08-09 13:02:59',6),(25,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png__210x10000_q85_subsampling-2.png','2015-08-09 13:03:32',3),(26,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png__210x10000_q85_subsampling-2.png','2015-08-09 13:03:52',4),(27,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/1f/1a/1f1a786e-1b79-4716-87c2-17ef48268597/1050702938_rllz_red_1.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:07:15',7),(28,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/1f/1a/1f1a786e-1b79-4716-87c2-17ef48268597/1050702938_rllz_red_1.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:07:15',7),(29,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/1f/1a/1f1a786e-1b79-4716-87c2-17ef48268597/1050702938_rllz_red_1.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:07:15',7),(30,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/1f/1a/1f1a786e-1b79-4716-87c2-17ef48268597/1050702938_rllz_red_1.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:07:15',7),(31,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/10/57/1057a3d1-a364-48ab-b2e1-24f20b19845b/1050702938_rllz_red_2.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:08:06',8),(32,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/10/57/1057a3d1-a364-48ab-b2e1-24f20b19845b/1050702938_rllz_red_2.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:08:06',8),(33,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/10/57/1057a3d1-a364-48ab-b2e1-24f20b19845b/1050702938_rllz_red_2.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:08:06',8),(34,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/10/57/1057a3d1-a364-48ab-b2e1-24f20b19845b/1050702938_rllz_red_2.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-26 19:08:06',8),(35,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/0c/04/0c049c9c-b08b-4a83-ad11-ea4fd37bc70b/gucci-gg-logo.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-27 19:14:09',9),(36,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/0c/04/0c049c9c-b08b-4a83-ad11-ea4fd37bc70b/gucci-gg-logo.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-27 19:14:09',9),(37,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/0c/04/0c049c9c-b08b-4a83-ad11-ea4fd37bc70b/gucci-gg-logo.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-27 19:14:09',9),(38,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/0c/04/0c049c9c-b08b-4a83-ad11-ea4fd37bc70b/gucci-gg-logo.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-27 19:14:09',9),(39,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f8/46/f8463b56-4ffb-4904-87a9-2f900135e71f/388650_zfz19_1230_001_web_full_new_theme.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:16:23',10),(40,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f8/46/f8463b56-4ffb-4904-87a9-2f900135e71f/388650_zfz19_1230_001_web_full_new_theme.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:16:23',10),(41,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f8/46/f8463b56-4ffb-4904-87a9-2f900135e71f/388650_zfz19_1230_001_web_full_new_theme.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:16:23',10),(42,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f8/46/f8463b56-4ffb-4904-87a9-2f900135e71f/388650_zfz19_1230_001_web_full_new_theme.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:16:23',10),(55,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f2/c1/f2c1f13f-d300-4548-957f-8dffe6b73d6a/1.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',14),(56,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f2/c1/f2c1f13f-d300-4548-957f-8dffe6b73d6a/1.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',14),(57,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f2/c1/f2c1f13f-d300-4548-957f-8dffe6b73d6a/1.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',14),(58,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/24/a9/24a9b045-bcfc-4e76-a228-722905894d4b/2.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',15),(59,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/f2/c1/f2c1f13f-d300-4548-957f-8dffe6b73d6a/1.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',14),(60,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/24/a9/24a9b045-bcfc-4e76-a228-722905894d4b/2.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',15),(61,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/24/a9/24a9b045-bcfc-4e76-a228-722905894d4b/2.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',15),(62,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/24/a9/24a9b045-bcfc-4e76-a228-722905894d4b/2.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-27 19:28:12',15),(63,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/09/fe096cf5-aa6e-445c-8508-511e9e769c27/logo.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-28 16:57:19',16),(64,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/09/fe096cf5-aa6e-445c-8508-511e9e769c27/logo.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-28 16:57:19',16),(65,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/09/fe096cf5-aa6e-445c-8508-511e9e769c27/logo.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-28 16:57:19',16),(66,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fe/09/fe096cf5-aa6e-445c-8508-511e9e769c27/logo.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-28 16:57:19',16),(67,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/9d/51/9d514c7d-c295-4b02-b97d-20bc80018f02/screen_shot_2015-08-28_at_100027_am.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',17),(68,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/9d/51/9d514c7d-c295-4b02-b97d-20bc80018f02/screen_shot_2015-08-28_at_100027_am.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',17),(69,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/9d/51/9d514c7d-c295-4b02-b97d-20bc80018f02/screen_shot_2015-08-28_at_100027_am.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',17),(70,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/9d/51/9d514c7d-c295-4b02-b97d-20bc80018f02/screen_shot_2015-08-28_at_100027_am.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',17),(71,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/5f/76/5f768565-7e05-4d1d-9ba0-1a805d79ba4f/screen_shot_2015-08-28_at_100037_am.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',18),(72,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/5f/76/5f768565-7e05-4d1d-9ba0-1a805d79ba4f/screen_shot_2015-08-28_at_100037_am.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',18),(73,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/e7/ce/e7ce7516-16d4-4db1-bad6-04576e0691ed/screen_shot_2015-08-28_at_100051_am.png__32x32_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',19),(74,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/5f/76/5f768565-7e05-4d1d-9ba0-1a805d79ba4f/screen_shot_2015-08-28_at_100037_am.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',18),(75,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/e7/ce/e7ce7516-16d4-4db1-bad6-04576e0691ed/screen_shot_2015-08-28_at_100051_am.png__64x64_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',19),(76,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/5f/76/5f768565-7e05-4d1d-9ba0-1a805d79ba4f/screen_shot_2015-08-28_at_100037_am.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',18),(77,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/e7/ce/e7ce7516-16d4-4db1-bad6-04576e0691ed/screen_shot_2015-08-28_at_100051_am.png__48x48_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',19),(78,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/e7/ce/e7ce7516-16d4-4db1-bad6-04576e0691ed/screen_shot_2015-08-28_at_100051_am.png__16x16_q85_crop_subsampling-2_upscale.png','2015-08-28 16:59:10',19),(79,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/08/28/Hospitality-with-Events-Management.jpg.700x263_q85_box-0,0,700,263_crop_detail.jpg','2015-08-28 17:14:11',20),(80,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/08/28/Hospitality-with-Events-Management.jpg.300x300_q85_detail_upscale.jpg','2015-08-28 17:15:53',20),(81,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/08/31/2014-01-03_01.46.54.jpg.4000x3000_q85_box-0,0,4000,3000_crop_detail.jpg','2015-08-31 10:55:42',21),(82,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:25',22),(83,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:26',22),(84,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:27',22),(85,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:28',22),(86,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:54',23),(87,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:54',23),(88,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:55',23),(89,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-08-31 11:02:56',23),(90,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg__210x10000_q85_subsampling-2.jpg','2015-08-31 11:03:44',22),(91,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg__210x10000_q85_subsampling-2.jpg','2015-08-31 11:03:56',23),(92,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/08/31/2014-01-03_01.46.54.jpg.300x300_q85_detail_upscale.jpg','2015-09-12 16:01:16',21),(93,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:24:44',24),(94,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:24:44',24),(95,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:24:45',24),(96,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:24:45',24),(97,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg__32x32_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:27:05',25),(98,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg__64x64_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:27:05',25),(99,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg__48x48_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:27:05',25),(100,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg__16x16_q85_crop_subsampling-2_upscale.jpg','2015-10-01 08:27:05',25),(101,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg__210x10000_q85_subsampling-2.jpg','2015-10-01 08:27:27',25),(102,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/09/ani_pic.png.530x388_q85_box-0,0,530,388_crop_detail.jpg','2015-12-09 17:49:21',26),(103,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/09/ani_pic.png.300x300_q85_detail_upscale.jpg','2015-12-09 17:51:30',26),(104,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/09/ani_pic_LdszQP4.png.530x388_q85_box-0,0,530,388_crop_detail.jpg','2015-12-09 17:52:35',27),(105,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/09/ani_pic_LdszQP4.png.300x300_q85_detail_upscale.jpg','2015-12-09 18:07:47',27),(106,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/09/ani_pic_LdszQP4.png.1400x934_q85_box-0,0,1400,934_crop_detail.jpg','2015-12-09 18:08:00',27),(107,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/10/practice-pic.png.750x501_q85_box-0,0,750,501_crop_detail.jpg','2015-12-10 15:41:03',28),(108,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2015/12/10/practice-pic.png.300x300_q85_detail_upscale.jpg','2015-12-14 15:33:42',28),(109,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/11/DSCF0269.jpg.300x300_q85_detail_upscale.jpg','2016-01-11 15:34:07',29),(110,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/11/DSCF0269.jpg.950x516_q85_box-0,0,950,516_crop_detail.jpg','2016-01-11 15:34:36',29),(111,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/11/DSCF0269.jpg.993x516_q85_box-0,0,993,516_crop_detail.jpg','2016-01-11 15:41:05',29),(112,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.23.37_AM.png.300x300_q85_detail_upscale.png','2016-01-15 11:13:51',30),(113,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.32.01_AM.png.1388x872_q85_box-0,0,1388,872_crop_detail.jpg','2016-01-15 11:15:02',31),(114,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.23.37_AM.png.2560x1600_q85_box-0,0,2560,1600_crop_detail.png','2016-01-15 11:15:05',30),(120,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png__32x32_q85_crop_subsampling-2_upscale.jpg','2016-01-15 11:58:39',33),(121,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png__64x64_q85_crop_subsampling-2_upscale.jpg','2016-01-15 11:58:39',33),(122,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png__48x48_q85_crop_subsampling-2_upscale.jpg','2016-01-15 11:58:39',33),(123,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png__16x16_q85_crop_subsampling-2_upscale.jpg','2016-01-15 11:58:39',33),(124,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png__210x10000_q85_subsampling-2.jpg','2016-01-15 11:59:01',33),(125,'d26becbf46ac48eda79c7a39a13a02dd','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.32.01_AM.png.300x300_q85_detail_upscale.jpg','2016-01-15 12:00:10',31),(143,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fb/14/fb148eb7-b06d-44bc-9ab5-4be9524e5c1f/screen_shot_2016-01-15_at_115625_am.png__32x32_q85_crop_subsampling-2_upscale.jpg','2016-01-15 12:03:44',38),(144,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fb/14/fb148eb7-b06d-44bc-9ab5-4be9524e5c1f/screen_shot_2016-01-15_at_115625_am.png__64x64_q85_crop_subsampling-2_upscale.jpg','2016-01-15 12:03:44',38),(145,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fb/14/fb148eb7-b06d-44bc-9ab5-4be9524e5c1f/screen_shot_2016-01-15_at_115625_am.png__48x48_q85_crop_subsampling-2_upscale.jpg','2016-01-15 12:03:44',38),(146,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/fb/14/fb148eb7-b06d-44bc-9ab5-4be9524e5c1f/screen_shot_2016-01-15_at_115625_am.png__16x16_q85_crop_subsampling-2_upscale.jpg','2016-01-15 12:03:44',38),(147,'f9bde26a1556cd667f742bd34ec7c55e','filer_public_thumbnails/filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg__210x10000_q85_subsampling-2.jpg','2016-02-04 14:41:15',24);
/*!40000 ALTER TABLE `easy_thumbnails_thumbnail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `easy_thumbnails_thumbnaildimensions`
--

DROP TABLE IF EXISTS `easy_thumbnails_thumbnaildimensions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `easy_thumbnails_thumbnaildimensions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thumbnail_id` int(11) NOT NULL,
  `width` int(10) unsigned DEFAULT NULL,
  `height` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `thumbnail_id` (`thumbnail_id`),
  CONSTRAINT `ea_thumbnail_id_29ad34faceb3c17c_fk_easy_thumbnails_thumbnail_id` FOREIGN KEY (`thumbnail_id`) REFERENCES `easy_thumbnails_thumbnail` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `easy_thumbnails_thumbnaildimensions`
--

LOCK TABLES `easy_thumbnails_thumbnaildimensions` WRITE;
/*!40000 ALTER TABLE `easy_thumbnails_thumbnaildimensions` DISABLE KEYS */;
/*!40000 ALTER TABLE `easy_thumbnails_thumbnaildimensions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events_event`
--

DROP TABLE IF EXISTS `events_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `caption` varchar(250) NOT NULL,
  `location` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `content` longtext NOT NULL,
  `datetime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_event`
--

LOCK TABLES `events_event` WRITE;
/*!40000 ALTER TABLE `events_event` DISABLE KEYS */;
INSERT INTO `events_event` VALUES (1,'video post','will smith','flamingopark','michian avenue, 21 FL 3990','<p>Content of event 1</p>\r\n','2015-12-15 19:36:54'),(2,'tyra banks gif','Caption of event 2','newlocation','new address, Town X TX 2000','<p>Content of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new eventContent of new event</p>\r\n','2015-12-16 19:38:53'),(3,'event from april','caption of april event','april location','event at april, town X','<p>content of event.</p>\r\n','2015-08-27 14:43:40'),(4,'pop up test','come join us','Miami beach ','111 Walla Walla Washington','<p>Join us at are PARTY<br />\r\n&nbsp;<img alt=\"\" src=\"/media/ckeditor/2015/08/27/3af8.gif\" /></p>\r\n','2015-08-27 11:30:00'),(5,'todays event','i love mofa','miami','123 miami fl','<p>Come get your Drink on</p>\r\n\r\n<p><img alt=\"\" src=\"/media/ckeditor/2015/08/27/5special-events_tRTT9hR.jpg\" /></p>\r\n','2015-08-27 18:41:37'),(6,'disney trip','come join us','disney world','disney fl','<p>testing</p>\r\n','2015-08-28 13:23:44'),(7,'Kerry test','kerry caption','kerry location','kerry address','<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n','2015-09-12 13:17:02'),(8,'Cubico coffee tasting','welcome some new beans','Midtown Miami','3250 NE 1st Ave, Miami, FL 33137','<p>Cubico Coffee has just opened here in Miami. Come taste their new liquids this Saturday. RSVP @: info@cubicocoffee.com&nbsp;</p>\r\n','2015-12-12 18:36:35');
/*!40000 ALTER TABLE `events_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events_media`
--

DROP TABLE IF EXISTS `events_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(10) NOT NULL,
  `link` varchar(250) DEFAULT NULL,
  `file` varchar(100) DEFAULT NULL,
  `event_id` int(11) NOT NULL,
  `order` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `events_media_event_id_56487a27c0b11bf9_fk_events_event_id` (`event_id`),
  CONSTRAINT `events_media_event_id_56487a27c0b11bf9_fk_events_event_id` FOREIGN KEY (`event_id`) REFERENCES `events_event` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_media`
--

LOCK TABLES `events_media` WRITE;
/*!40000 ALTER TABLE `events_media` DISABLE KEYS */;
INSERT INTO `events_media` VALUES (4,'video','https://www.youtube.com/watch?v=LbduDRH2m2M','',1,0),(5,'video','https://www.youtube.com/watch?v=h-DPYG215Uw&list=PL0HT_vBlSDlGixqmjt3K0DXhBIFr88Qwv','',4,0),(6,'video','https://www.youtube.com/watch?v=TldxSnNuIa4','',6,0),(7,'video','https://www.youtube.com/watch?v=TldxSnNuIa4','',7,0),(8,'image','','events/2015/12/09/Universe_Background.jpg',8,0),(9,'image','','events/2015/12/14/tyra-1.gif',2,0),(10,'image','','events/2015/12/14/tumblr_nz3zd0FWaA1qlycwjo1_1280.jpg',2,1),(11,'audio','','events/2015/12/23/Adrian_Paunescu_-_Alexandru_Zarnescu_-_Oda_In_Metru_Antic_apopeste__ww_mRyKf4u.mp3',4,1);
/*!40000 ALTER TABLE `events_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filer_clipboard`
--

DROP TABLE IF EXISTS `filer_clipboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filer_clipboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `filer_clipboard_e8701ad4` (`user_id`),
  CONSTRAINT `filer_clipboard_user_id_2b30c76f2cd235df_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filer_clipboard`
--

LOCK TABLES `filer_clipboard` WRITE;
/*!40000 ALTER TABLE `filer_clipboard` DISABLE KEYS */;
INSERT INTO `filer_clipboard` VALUES (3,1),(5,2),(4,3);
/*!40000 ALTER TABLE `filer_clipboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filer_clipboarditem`
--

DROP TABLE IF EXISTS `filer_clipboarditem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filer_clipboarditem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clipboard_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `filer_clipbo_clipboard_id_335d159e1aea2cdc_fk_filer_clipboard_id` (`clipboard_id`),
  KEY `filer_clipboarditem_814552b9` (`file_id`),
  CONSTRAINT `filer_clipbo_clipboard_id_335d159e1aea2cdc_fk_filer_clipboard_id` FOREIGN KEY (`clipboard_id`) REFERENCES `filer_clipboard` (`id`),
  CONSTRAINT `filer_clipboarditem_file_id_7b1b6a14b5a3f2b1_fk_filer_file_id` FOREIGN KEY (`file_id`) REFERENCES `filer_file` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filer_clipboarditem`
--

LOCK TABLES `filer_clipboarditem` WRITE;
/*!40000 ALTER TABLE `filer_clipboarditem` DISABLE KEYS */;
INSERT INTO `filer_clipboarditem` VALUES (9,4,29);
/*!40000 ALTER TABLE `filer_clipboarditem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filer_file`
--

DROP TABLE IF EXISTS `filer_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filer_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file` varchar(255) DEFAULT NULL,
  `_file_size` int(11) DEFAULT NULL,
  `sha1` varchar(40) NOT NULL,
  `has_all_mandatory_data` tinyint(1) NOT NULL,
  `original_filename` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext,
  `uploaded_at` datetime NOT NULL,
  `modified_at` datetime NOT NULL,
  `is_public` tinyint(1) NOT NULL,
  `folder_id` int(11) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `polymorphic_ctype_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `filer_file_a8a44dbb` (`folder_id`),
  KEY `filer_file_5e7b1936` (`owner_id`),
  KEY `filer_file_d3e32c49` (`polymorphic_ctype_id`),
  CONSTRAINT `filer_file_folder_id_24318dda71f59785_fk_filer_folder_id` FOREIGN KEY (`folder_id`) REFERENCES `filer_folder` (`id`),
  CONSTRAINT `filer_file_owner_id_67317c663ea33283_fk_auth_user_id` FOREIGN KEY (`owner_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `polymorphic_ctype_id_37b6c9e9cb7a323a_fk_django_content_type_id` FOREIGN KEY (`polymorphic_ctype_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filer_file`
--

LOCK TABLES `filer_file` WRITE;
/*!40000 ALTER TABLE `filer_file` DISABLE KEYS */;
INSERT INTO `filer_file` VALUES (1,'filer_public/06/74/0674b943-8d01-4f85-9525-0660fb1cdf61/channel.png',3166,'04cc65c3d792ab99e5e4580a43a64dda13cd89e4',0,'channel.png','',NULL,'2015-08-08 14:13:36','2015-08-08 14:13:37',1,1,1,29),(2,'filer_public/4b/45/4b45b134-9a00-42f6-9514-574cdc7bf7cf/dress.png',37230,'679b83bbd43c068602153b2bd0d82d04efbf4760',1,'dress.png','test dress white','this is a caption for this image','2015-08-08 15:50:08','2015-08-09 13:03:49',1,2,1,29),(3,'filer_public/01/20/0120fa45-4566-49ad-b32c-ada0cd526888/dress_pink.png',36008,'0745f457b232a42d4f383cb8afd424af186732b0',1,'dress_pink.png','Dress pink','this is a caption for this image','2015-08-08 17:26:00','2015-08-09 13:04:05',1,2,1,29),(4,'filer_public/fe/d2/fed20109-7c8e-46da-abbc-b7909bd18c4f/1411729541_rllz_1.jpg',74927,'bd8a1e45c7c621c9d094d7b5429d2cd6556a73ad',1,'1411729541_RLLZ_1.jpg','Blue Dress','This is a tag for this image','2015-08-09 12:36:22','2015-08-27 15:50:33',1,2,1,29),(5,'filer_public/95/68/9568df5a-de4b-4a00-bce8-065895437f8c/1411729541_rllz_2.jpg',72154,'e9c69988533b800f1835ac89b9b2b28675135d13',1,'1411729541_RLLZ_2.jpg','Blue Dress back','This is a tag for this image','2015-08-09 12:36:22','2015-08-09 13:03:18',1,2,1,29),(6,'filer_public/1f/1a/1f1a786e-1b79-4716-87c2-17ef48268597/1050702938_rllz_red_1.jpg',68281,'6a59ea2a7eecf0b9d40805b3296fe1ed878d92b0',0,'1050702938_RLLZ_red_1.jpg','',NULL,'2015-08-26 19:07:15','2015-08-27 14:13:45',1,2,1,29),(7,'filer_public/10/57/1057a3d1-a364-48ab-b2e1-24f20b19845b/1050702938_rllz_red_2.jpg',69753,'e8b397fae2c922b9c8990b1ee07ef818919526ff',0,'1050702938_RLLZ_red_2.jpg','',NULL,'2015-08-26 19:08:06','2015-08-26 19:08:07',1,2,1,29),(8,'filer_public/0c/04/0c049c9c-b08b-4a83-ad11-ea4fd37bc70b/gucci-gg-logo.png',2875,'0490bddd413dbca9f0dac5639e117bd84343f98d',0,'Gucci-GG-logo.png','',NULL,'2015-08-27 19:14:09','2015-08-27 19:14:11',1,1,3,29),(9,'filer_public/f8/46/f8463b56-4ffb-4904-87a9-2f900135e71f/388650_zfz19_1230_001_web_full_new_theme.jpg',35388,'60cbf0b3cb3a2781cf73adaf3ee6dec041040512',0,'388650_ZFZ19_1230_001_web_full_new_theme.jpg','',NULL,'2015-08-27 19:16:23','2015-08-27 19:16:41',1,NULL,3,29),(13,'filer_public/f2/c1/f2c1f13f-d300-4548-957f-8dffe6b73d6a/1.jpg',31212,'00db1595ed8278708aa0f9e3f4bdc612721da6a3',0,'1.jpg','',NULL,'2015-08-27 19:28:12','2015-08-27 19:28:14',1,2,3,29),(14,'filer_public/24/a9/24a9b045-bcfc-4e76-a228-722905894d4b/2.jpg',31658,'fe0857c3defe11158b0fec08f1fec9d77fc7661c',0,'2.jpg','',NULL,'2015-08-27 19:28:12','2015-08-27 19:28:14',1,2,3,29),(15,'filer_public/fe/09/fe096cf5-aa6e-445c-8508-511e9e769c27/logo.png',1349,'9f6a2e6fd533b4dfd9d526a78e269c7bded78d5f',0,'logo.png','',NULL,'2015-08-28 16:57:19','2015-08-28 16:57:27',1,1,3,29),(16,'filer_public/9d/51/9d514c7d-c295-4b02-b97d-20bc80018f02/screen_shot_2015-08-28_at_100027_am.png',157459,'caf02dba418470ea1b7ba05f3b802cdaa8088fc1',0,'Screen Shot 2015-08-28 at 10.00.27 AM.png','',NULL,'2015-08-28 16:59:09','2015-08-28 16:59:13',1,2,3,29),(17,'filer_public/5f/76/5f768565-7e05-4d1d-9ba0-1a805d79ba4f/screen_shot_2015-08-28_at_100037_am.png',139453,'aeaea8451239e584be6ad3baeb8cd68a65e019d1',0,'Screen Shot 2015-08-28 at 10.00.37 AM.png','',NULL,'2015-08-28 16:59:10','2015-08-28 16:59:13',1,2,3,29),(18,'filer_public/e7/ce/e7ce7516-16d4-4db1-bad6-04576e0691ed/screen_shot_2015-08-28_at_100051_am.png',128993,'bb3e7ea7a08d2b7ca494355bb5d15d48b9712f0a',0,'Screen Shot 2015-08-28 at 10.00.51 AM.png','',NULL,'2015-08-28 16:59:10','2015-08-28 16:59:13',1,2,3,29),(19,'filer_public/b4/cc/b4cca22a-e25c-409f-b599-ddc6cf11e3ea/mofa__1.jpg',7455302,'b5dec92acefcfdd089db663c241c989750455f94',0,'Mofa__1.JPG','',NULL,'2015-08-31 11:02:24','2015-12-14 15:46:20',1,1,1,29),(20,'filer_public/7a/40/7a40bc7c-7b36-4284-90ed-2b336578f9dc/mofa_27.jpg',4566082,'68a16b01391e6079d5a90effc56298436ec05b43',0,'Mofa_27.JPG','',NULL,'2015-08-31 11:02:53','2015-12-14 15:46:20',1,1,1,29),(21,'filer_public/8d/9d/8d9d40e8-72bf-4c38-8133-da9167541b83/p1030354.jpg',5014492,'9d2818dfe284145429e8d58b7b6dcec9faff4424',0,'P1030354.JPG','','','2015-10-01 08:24:43','2016-02-04 14:41:18',1,NULL,1,29),(22,'filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg',74455,'6a855b1277cd5cd6b455751a52f7565d5987d028',0,'IMG-169748441_1.jpg','','','2015-10-01 08:27:05','2015-10-01 08:27:42',1,6,1,29),(24,'filer_public/71/a8/71a89cbd-4556-40e4-8f55-9c0b40617c58/screen_shot_2016-01-15_at_115625_am.png',243168,'f3ca5b2123562e6db96751928ca0d7885eed853a',0,'Screen Shot 2016-01-15 at 11.56.25 AM.png','','','2016-01-15 11:58:39','2016-01-15 11:59:03',1,4,3,29),(29,'filer_public/fb/14/fb148eb7-b06d-44bc-9ab5-4be9524e5c1f/screen_shot_2016-01-15_at_115625_am.png',243168,'f3ca5b2123562e6db96751928ca0d7885eed853a',0,'Screen Shot 2016-01-15 at 11.56.25 AM.png','',NULL,'2016-01-15 12:03:44','2016-01-15 12:03:44',1,NULL,3,29);
/*!40000 ALTER TABLE `filer_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filer_folder`
--

DROP TABLE IF EXISTS `filer_folder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filer_folder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `uploaded_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime NOT NULL,
  `lft` int(10) unsigned NOT NULL,
  `rght` int(10) unsigned NOT NULL,
  `tree_id` int(10) unsigned NOT NULL,
  `level` int(10) unsigned NOT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filer_folder_parent_id_30ad83e34d901e49_uniq` (`parent_id`,`name`),
  KEY `filer_folder_owner_id_6527f5f13a76f3ed_fk_auth_user_id` (`owner_id`),
  KEY `filer_folder_caf7cc51` (`lft`),
  KEY `filer_folder_3cfbd988` (`rght`),
  KEY `filer_folder_656442a0` (`tree_id`),
  KEY `filer_folder_c9e9a848` (`level`),
  CONSTRAINT `filer_folder_owner_id_6527f5f13a76f3ed_fk_auth_user_id` FOREIGN KEY (`owner_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `filer_folder_parent_id_4170098ac31c2cbf_fk_filer_folder_id` FOREIGN KEY (`parent_id`) REFERENCES `filer_folder` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filer_folder`
--

LOCK TABLES `filer_folder` WRITE;
/*!40000 ALTER TABLE `filer_folder` DISABLE KEYS */;
INSERT INTO `filer_folder` VALUES (1,'Designers','2015-08-08 14:13:25','2015-08-08 14:13:25','2015-08-08 14:13:25',1,4,1,0,1,NULL),(2,'Products','2015-08-08 15:49:47','2015-08-08 15:49:47','2015-08-08 15:49:47',1,2,2,0,1,NULL),(3,'test','2015-08-28 16:51:05','2015-08-28 16:51:05','2015-08-28 16:51:05',1,2,3,0,3,NULL),(4,'mofamofamofa','2015-08-31 11:01:53','2015-08-31 11:01:53','2015-08-31 11:01:53',2,3,1,1,1,1),(5,'news','2015-10-01 08:23:52','2015-10-01 08:23:52','2015-10-01 08:23:52',1,2,4,0,1,NULL),(6,'galleries','2015-10-01 08:24:16','2015-10-01 08:24:16','2015-10-01 08:24:16',1,2,5,0,1,NULL);
/*!40000 ALTER TABLE `filer_folder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filer_folderpermission`
--

DROP TABLE IF EXISTS `filer_folderpermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filer_folderpermission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` smallint(6) NOT NULL,
  `everybody` tinyint(1) NOT NULL,
  `can_edit` smallint(6) DEFAULT NULL,
  `can_read` smallint(6) DEFAULT NULL,
  `can_add_children` smallint(6) DEFAULT NULL,
  `folder_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `filer_folderpermis_folder_id_442a5347ee209a98_fk_filer_folder_id` (`folder_id`),
  KEY `filer_folderpermissio_group_id_7c2389ac07ebbde2_fk_auth_group_id` (`group_id`),
  KEY `filer_folderpermission_user_id_7c6e1a7187a0f15b_fk_auth_user_id` (`user_id`),
  CONSTRAINT `filer_folderpermis_folder_id_442a5347ee209a98_fk_filer_folder_id` FOREIGN KEY (`folder_id`) REFERENCES `filer_folder` (`id`),
  CONSTRAINT `filer_folderpermissio_group_id_7c2389ac07ebbde2_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `filer_folderpermission_user_id_7c6e1a7187a0f15b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filer_folderpermission`
--

LOCK TABLES `filer_folderpermission` WRITE;
/*!40000 ALTER TABLE `filer_folderpermission` DISABLE KEYS */;
/*!40000 ALTER TABLE `filer_folderpermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filer_image`
--

DROP TABLE IF EXISTS `filer_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filer_image` (
  `file_ptr_id` int(11) NOT NULL,
  `_height` int(11) DEFAULT NULL,
  `_width` int(11) DEFAULT NULL,
  `date_taken` datetime DEFAULT NULL,
  `default_alt_text` varchar(255) DEFAULT NULL,
  `default_caption` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `must_always_publish_author_credit` tinyint(1) NOT NULL,
  `must_always_publish_copyright` tinyint(1) NOT NULL,
  `subject_location` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`file_ptr_id`),
  CONSTRAINT `filer_image_file_ptr_id_1dde9ad32bce39a6_fk_filer_file_id` FOREIGN KEY (`file_ptr_id`) REFERENCES `filer_file` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filer_image`
--

LOCK TABLES `filer_image` WRITE;
/*!40000 ALTER TABLE `filer_image` DISABLE KEYS */;
INSERT INTO `filer_image` VALUES (1,59,80,'2015-08-08 14:13:36',NULL,NULL,NULL,0,0,NULL),(2,405,138,'2015-08-08 15:50:08','','','',0,0,''),(3,405,138,'2015-08-08 17:26:00','','','',0,0,''),(4,1080,864,'2015-08-09 12:36:22','','','',0,0,''),(5,1080,864,'2015-08-09 12:36:22','','','',0,0,''),(6,1080,864,'2015-08-26 19:07:15',NULL,NULL,NULL,0,0,NULL),(7,1080,864,'2015-08-26 19:08:06',NULL,NULL,NULL,0,0,NULL),(8,59,80,'2015-08-27 19:14:09',NULL,NULL,NULL,0,0,NULL),(9,443,430,'2015-08-27 19:16:23',NULL,NULL,NULL,0,0,NULL),(13,443,430,'2015-08-27 19:28:12',NULL,NULL,NULL,0,0,NULL),(14,443,430,'2015-08-27 19:28:12',NULL,NULL,NULL,0,0,NULL),(15,59,80,'2015-08-28 16:57:19',NULL,NULL,NULL,0,0,NULL),(16,637,349,'2015-08-28 16:59:09',NULL,NULL,NULL,0,0,NULL),(17,642,364,'2015-08-28 16:59:10',NULL,NULL,NULL,0,0,NULL),(18,638,387,'2015-08-28 16:59:10',NULL,NULL,NULL,0,0,NULL),(19,3744,5616,'2015-08-31 11:02:24',NULL,NULL,NULL,0,0,NULL),(20,5616,3744,'2015-08-31 11:02:53',NULL,NULL,NULL,0,0,NULL),(21,3000,4000,'2015-10-01 08:24:43','','','',0,0,''),(22,600,800,'2015-10-01 08:27:05','','caption for this image','',0,0,''),(24,419,426,'2016-01-15 11:58:39','','','',0,0,''),(29,419,426,'2016-01-15 12:03:44',NULL,NULL,NULL,0,0,NULL);
/*!40000 ALTER TABLE `filer_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galleries_article`
--

DROP TABLE IF EXISTS `galleries_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `galleries_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(15) NOT NULL,
  `subcategory` varchar(15) NOT NULL,
  `title` varchar(250) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `video` varchar(250) DEFAULT NULL,
  `audio` varchar(100) DEFAULT NULL,
  `content` longtext,
  `published` tinyint(1) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  `cropping` varchar(255) NOT NULL,
  `short_description` longtext,
  `caption` varchar(250) DEFAULT NULL,
  `embedded_image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `galleries_article_a2fb24ef` (`embedded_image_id`),
  CONSTRAINT `ga_embedded_image_id_4d27ea7d03130494_fk_filer_image_file_ptr_id` FOREIGN KEY (`embedded_image_id`) REFERENCES `filer_image` (`file_ptr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galleries_article`
--

LOCK TABLES `galleries_article` WRITE;
/*!40000 ALTER TABLE `galleries_article` DISABLE KEYS */;
INSERT INTO `galleries_article` VALUES (1,'see','human','Kerry Test','galleries/2015/06/29/CS01_DSC_4414.jpg','','','<div>&nbsp;</div>\r\n\r\n<div><strong>Lorem Ipsum</strong><span style=\"color:rgb(0, 0, 0)\">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></div>\r\n\r\n<div>\r\n<div>&nbsp;</div>\r\n\r\n<div><strong>Lorem Ipsum</strong><span style=\"color:rgb(0, 0, 0)\">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></div>\r\n\r\n<div>&nbsp;</div>\r\n</div>\r\n',1,'2015-08-25 18:57:25','2015-06-29 18:47:39','233,38,1026,445','<p>short description</p>\r\n',NULL,NULL),(2,'listen','human','Kerry Audio Test','','','./voice-message_1.mp3','<p>here is some text and an image<img alt=\"\" src=\"http://mofa.zonechat.org/media/filer_public/67/49/67498eba-2836-417b-b3fb-53d137a15e73/img-169748441_1.jpg\" style=\"float:right; height:300px; margin-left:10px; margin-right:10px; width:400px\" /></p>\r\n\r\n<p>This is an example of a embedded image inside the html</p>\r\n\r\n<p>You can use this to embed images and gifs within your posts but the image captions will not show.</p>\r\n\r\n<p>Although you could caption to the side like this for example:</p>\r\n\r\n<p><em><strong>My image caption here</strong></em></p>\r\n\r\n<p>If you use this method you can actually embed multiple images inside your page.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n',1,'2015-10-05 14:23:16','2015-06-29 20:55:32','','<p>Audio Voice test</p>\r\n','',NULL),(3,'listen','human','Test audio 2','','','./voice-2bmessage.mp3','<p>Here is some more content re the MP3</p>\r\n\r\n<p>This uses the embedded image plugin below. &nbsp;If you embed in this way the image will have a caption below it.</p>\r\n\r\n<p>The embedded image shows right aligned and fills 45% of the space.</p>\r\n',1,'2015-10-05 14:20:13','2015-06-29 21:14:25','','<p>This is a test message a little longer than the first</p>\r\n','here is my caption',22),(4,'read','human','A read test','','','','<p><br />\r\ntesting this post<br />\r\n<img alt=\"\" src=\"/media/ckeditor/2015/08/27/giphy-1.gif\" style=\"height:375px; width:500px\" /></p>\r\n',1,'2015-12-14 15:30:55','2015-06-29 21:22:30','','<p>here is some info on read<br />\r\n<img alt=\"\" src=\"/media/ckeditor/2015/08/27/giphy-1.gif\" /></p>\r\n','',NULL),(5,'watch','human','Kerry test Video','','https://www.youtube.com/watch?v=ig48AOadxd0','','',1,'2015-06-29 21:29:19','2015-06-29 21:29:19','','<p>Test video</p>\r\n',NULL,NULL),(6,'watch','human','Video Title - Kerry','','https://www.youtube.com/watch?v=stkH_-IfH6o','','',1,'2015-06-30 10:33:16','2015-06-30 10:33:16','','<p>You tube test video</p>\r\n',NULL,NULL),(7,'read','human','Pauls Test','','','','<p>More content<br />\r\n<img alt=\"\" src=\"/media/ckeditor/2015/12/14/tyra-1.gif\" style=\"height:652px; width:741px\" /><br />\r\ntest</p>\r\n',1,'2015-12-14 16:09:44','2015-08-26 19:25:18','','<p>Short Description<br />\r\n<img alt=\"\" src=\"/media/ckeditor/2015/08/27/3af8.gif\" style=\"height:225px; width:300px\" /></p>\r\n','',NULL),(8,'read','tech','Madonna ','','','','<p><img alt=\"yes\" src=\"http://mofa.zonechat.org/static/ckeditor/ckeditor/plugins/smiley/images/thumbs_up.png\" style=\"height:23px; width:23px\" title=\"yes\" />&nbsp;this is a&nbsp;GIF OF MADONNA&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>text test</p>\r\n\r\n<p><img alt=\"\" src=\"/media/ckeditor/2015/08/27/3af8.gif\" /></p>\r\n',1,'2015-08-27 14:30:25','2015-08-27 14:21:23','','<p>GIF OF MADONNA&nbsp;GIF OF<br />\r\n&nbsp;</p>\r\n',NULL,NULL),(9,'read','tech','Madonna  2','','','','',1,'2015-08-28 17:25:22','2015-08-27 14:30:27','','<p>GIF OF MADONNA&nbsp;GIF OF<br />\r\n&nbsp;</p>\r\n',NULL,NULL),(11,'see','nature','white canvas','galleries/2015/08/31/2014-01-03_01.46.54.jpg','','','<p>some days are more snowy than others and the wind blows&nbsp;softly, sometimes not so softly... brrrr!&nbsp;white powder is there&nbsp;and&nbsp;we can&nbsp;draw on it, with skis or&nbsp;snowboards (in thongs or jumpsuits), woot woot, sing all the way down.</p>\r\n\r\n<p>there is&nbsp;freedom! take it,&nbsp;to make all the figures you&nbsp;wish&nbsp;for,&nbsp;draw with your feet&nbsp;them swirls, them&nbsp;dances that move your soul.</p>\r\n',1,'2015-10-01 06:36:59','2015-08-31 10:55:20','0,0,4000,3000','<p>winter 2015, white-colored snow covers&nbsp;the&nbsp;high, massive&nbsp;mountains of Vail, Colorado.</p>\r\n\r\n<p>&nbsp;</p>\r\n','some caption text here',NULL),(12,'watch','human','Kaptain, it\'s coming...','','https://vimeo.com/147668480','','',1,'2015-12-08 17:15:16','2015-12-08 17:10:52','','','Are you ready? You are the Kaptain we speak to. Remember, you are a hero, you are capable of everything you want to achieve. Go out, go create. ',NULL),(13,'watch','nature','Nature Am I','','https://vimeo.com/147952091','','<p>my very&nbsp;special friends @natureami will share with you magical secrets about raw human existence.&nbsp;they have&nbsp;much knowledge on herbs, yoga, traveling, and what you need to maximize your potential. check their first video on their project, Nature Am I, made with love for you.&nbsp;</p>\r\n',1,'2015-12-08 19:07:44','2015-12-08 17:21:18','','<p>my very&nbsp;special friends @natureami will share with you magical secrets about raw human existence.&nbsp;they have&nbsp;much knowledge on herbs, yoga, traveling, and what you need to maximize your potential. check their first video on their project, Nature Am I, made with love for you.&nbsp;</p>\r\n','@natuerami first video!',NULL),(14,'read','spirit','your heart','','','','',1,'2015-12-08 19:46:34','2015-12-08 19:46:12','','<p>Keep your heart with all vigilance, for from it flow the springs of life. (Proverbs 4:23)</p>\r\n\r\n<p>What does this mean?</p>\r\n\r\n<p>This means that we need to protect our heart, because it gives us life, the energy we need to live! If our heart is damaged, we cannot live well. We are hurt, we must limp and we cannot walk... we cannot do as we could otherwise. Protect your heart... it is where your life comes from.&nbsp;</p>\r\n\r\n<p>Your heart = love... so all life comes from love. Protect your love, KEEP your love flowing.&nbsp;</p>\r\n','',NULL),(15,'see','nature','Indonesian rocks','galleries/2015/12/09/ani_pic_LdszQP4.png','','','',1,'2015-12-09 18:07:54','2015-12-09 17:49:12','0,0,1400,934','','@natureami travels to Indonesia',NULL),(16,'watch','tech','germs on planes, ew','','','','<iframe src=\"https://embed-ssl.ted.com/talks/bertrand_piccard_s_solar_powered_adventure.html\" width=\"640\" height=\"360\" frameborder=\"0\" scrolling=\"no\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',1,'2015-12-10 15:33:22','2015-12-10 15:13:30','','','',NULL),(17,'see','nature','sky oranges','galleries/2015/12/10/practice-pic.png','','','',1,'2015-12-10 15:40:55','2015-12-10 15:40:55','0,0,750,501','','',NULL),(27,'read','human','r u a writer?','','','','<p>&nbsp;</p>\r\n\r\n<p><em>I think the writer, as I&rsquo;ve said before, is completely amoral. He takes whatever he needs, wherever he needs, and he does that openly and honestly because he himself hopes that what he does will be good enough so that after him people will take from him, and they are welcome to take from him, as he feels that he would be welcome by the best of his predecessors to take what they had done.</em></p>\r\n',1,'2015-12-16 11:58:38','2015-12-16 11:58:38','','','',NULL),(28,'listen','human','Kerry test large file','','','./04_Pink_Floyd_-_The_Great_Gig_In_The_Sky_.mp3','',1,'2015-12-30 16:39:03','2015-12-30 16:39:03','','<p>We were originally expecting upto 30 sec files - this is a test to see if we can reproduce error.</p>\r\n','this is a large music file',NULL),(29,'listen','human','big file test 2','','','./Pogues_-_Dirty_Old_Town.mp3','',1,'2015-12-30 16:45:36','2015-12-30 16:43:12','','<p>larger mp3 test</p>\r\n','',22),(30,'listen','human','big test 3','','','./80s_Soft_rock_-_Shanade_OConner_-_Nothing_Compares_to_you.mp3','',1,'2015-12-30 16:50:29','2015-12-30 16:49:11','','<p>almost 5mb</p>\r\n','big file test 3',NULL),(31,'listen','human','12/30 final test','','','./Moby_-_Porcelain.mp3','',1,'2015-12-30 16:55:03','2015-12-30 16:55:03','','','moby',NULL),(38,'see','human','Kerry Test','galleries/2016/01/11/DSCF0269.jpg','','','',1,'2016-01-11 15:36:30','2016-01-11 15:32:41','0,0,993,516','','kerry test',NULL),(39,'watch','human','Kerry Test','','https://www.youtube.com/watch?v=54GwZwpRcc8','','',1,'2016-01-11 16:32:58','2016-01-11 16:32:58','','','kerry test',NULL),(40,'watch','food','Study on Eggs','','https://www.youtube.com/watch?v=1hgOHzFb1Xg&sns=em','','',1,'2016-01-11 17:00:10','2016-01-11 16:59:13','','<p>Kerry test for Eugenia</p>\r\n','',NULL),(44,'watch','food','Test 1','','https://www.youtube.com/watch?v=3KJs9ZVKZEo','','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br />\r\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br />\r\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br />\r\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse<br />\r\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br />\r\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n',1,'2016-01-12 13:56:55','2016-01-12 13:56:55','','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br />\r\ntempor incididunt ut labore et dolore magna aliqua.&nbsp;</p>\r\n','Some test caption',NULL),(45,'watch','food','Study on Eggs','','https://www.youtube.com/watch?v=1hgOHzFb1Xg&sns=em','','',1,'2016-01-12 18:28:40','2016-01-12 18:28:40','','<p>Eugenia&#39;s test</p>\r\n','testing EB admin',NULL),(46,'see','food','screenshot','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.23.37_AM.png','','','',1,'2016-01-15 11:14:11','2016-01-15 11:13:46','0,0,2560,1600','<p>this is a test of the picture&nbsp;</p>\r\n','Screen shot',NULL),(47,'see','food','test issac','galleries/2016/01/15/Screen_Shot_2016-01-15_at_10.32.01_AM.png','','','<p>this is the adobe test</p>\r\n',1,'2016-01-15 11:14:44','2016-01-15 11:14:44','0,0,1388,872','<p>adobe testing with mofa&nbsp;</p>\r\n','adobe test',NULL);
/*!40000 ALTER TABLE `galleries_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mofa_backgroundtiming`
--

DROP TABLE IF EXISTS `mofa_backgroundtiming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mofa_backgroundtiming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `background_image` varchar(100) NOT NULL,
  `time_of_day` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mofa_backgroundtiming`
--

LOCK TABLES `mofa_backgroundtiming` WRITE;
/*!40000 ALTER TABLE `mofa_backgroundtiming` DISABLE KEYS */;
INSERT INTO `mofa_backgroundtiming` VALUES (1,'background/2015/08/27/17-08/dark_bg2.jpg','21:00:00'),(2,'background/2015/08/27/17-08/dark_bg3.jpg','09:22:00'),(3,'background/2015/08/27/17-08/dark_bg4.jpg','18:00:00'),(4,'background/2015/08/28/13-08/gray-light-bg.jpg','09:21:00'),(5,'background/2015/08/28/13-08/gray-dark-background.jpg','09:43:00'),(6,'background/2015/08/28/16-08/dark_bg2.jpg','12:34:24'),(7,'background/2015/12/08/18-12/_8000838.jpg','18:20:50'),(8,'background/2015/12/15/11-12/_8000838_revised2.jpg','11:18:11');
/*!40000 ALTER TABLE `mofa_backgroundtiming` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mofa_page`
--

DROP TABLE IF EXISTS `mofa_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mofa_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `title` varchar(150) NOT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mofa_page`
--

LOCK TABLES `mofa_page` WRITE;
/*!40000 ALTER TABLE `mofa_page` DISABLE KEYS */;
INSERT INTO `mofa_page` VALUES (1,'about','About Mofa','<p>&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"/media/ckeditor/2015/08/27/written-out-mofa.png\" style=\"height:119px; width:405px\" /><br />\r\n&nbsp;</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, vel quando suscipit ea, eirmod regione quo in, quidam eleifend no mea. Sed et mollis corpora, nam voluptua dissentiunt id, mei ex consul offendit. Dico phaedrum pro ea, ne invenire ullamcorper cum. Qui et dicunt veritus, sed ne quem enim aliquando. Cu duo timeam vivendo denique, etiam commune eum ne, ius ex sint conceptam vituperatoribus.</p>\r\n\r\n<p>Tibique omittantur eam at, ea graeco offendit cum. Eu quis nullam facilisis mel, nam sonet utamur postulant ut. Mei an congue dictas adolescens. Mei etiam feugait dissentiunt eu, in quo dicam dolores interpretaris, putent nonumes nominati duo no. Id fabellas pericula mea, te impedit consequat definiebas usu.</p>\r\n'),(2,'','test','<p>test</p>\r\n'),(3,'terms-of-use','Terms of Use',NULL),(4,'delivery-shipping','Delivery & Shipping',NULL),(5,'returns-exchange','Returns & Exchange',NULL);
/*!40000 ALTER TABLE `mofa_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mofa_subscriber`
--

DROP TABLE IF EXISTS `mofa_subscriber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mofa_subscriber` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(250) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mofa_subscriber`
--

LOCK TABLES `mofa_subscriber` WRITE;
/*!40000 ALTER TABLE `mofa_subscriber` DISABLE KEYS */;
INSERT INTO `mofa_subscriber` VALUES (1,'Kerry Burt','kb@recme.com','2015-10-01 13:12:11');
/*!40000 ALTER TABLE `mofa_subscriber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_item`
--

DROP TABLE IF EXISTS `orders_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(10) unsigned NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `stock_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orders_item_order_id_69c9212a0e26fb72_uniq` (`order_id`,`stock_id`),
  KEY `orders_item_69dfcb07` (`order_id`),
  KEY `orders_item_9bea82de` (`product_id`),
  KEY `orders_item_aff86b81` (`stock_id`),
  CONSTRAINT `orders_item_order_id_4dc958e72a70d815_fk_orders_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders_order` (`id`),
  CONSTRAINT `orders_item_product_id_3214b9b3b2a723bc_fk_shop_product_id` FOREIGN KEY (`product_id`) REFERENCES `shop_product` (`id`),
  CONSTRAINT `orders_item_stock_id_758cd926625a464d_fk_shop_stock_id` FOREIGN KEY (`stock_id`) REFERENCES `shop_stock` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_item`
--

LOCK TABLES `orders_item` WRITE;
/*!40000 ALTER TABLE `orders_item` DISABLE KEYS */;
INSERT INTO `orders_item` VALUES (1,1,'2015-08-25 14:57:55','2015-08-25 14:57:55',1,1,5),(4,2,'2015-08-25 15:45:55','2015-08-25 15:45:55',1,1,8),(5,4,'2015-09-03 10:18:39','2015-08-25 15:46:11',3,1,5),(6,2,'2015-08-25 15:46:16','2015-08-25 15:46:16',3,1,1),(12,1,'2015-08-27 13:58:36','2015-08-27 13:58:36',4,1,4),(13,1,'2015-08-27 14:01:45','2015-08-27 14:01:45',4,1,8),(14,12,'2015-08-27 14:33:42','2015-08-27 14:33:42',4,1,3),(15,10,'2015-08-27 14:34:31','2015-08-27 14:34:24',4,2,6),(19,1,'2015-08-27 19:57:27','2015-08-27 19:57:27',15,3,16),(21,2,'2015-08-28 17:05:30','2015-08-28 17:05:30',19,4,18),(25,1,'2015-09-09 10:18:55','2015-09-09 10:18:55',2,1,4),(29,1,'2015-09-11 08:46:05','2015-09-11 08:46:05',34,4,19),(31,1,'2015-09-17 15:19:27','2015-09-17 15:19:27',2,1,5),(34,1,'2015-09-18 19:55:34','2015-09-18 19:55:34',50,2,6),(35,5,'2015-10-01 05:57:43','2015-09-22 18:52:35',53,1,5),(36,1,'2015-09-29 07:43:36','2015-09-29 07:43:36',3,2,6),(37,1,'2015-09-30 11:23:29','2015-09-30 11:23:29',5,2,6),(38,1,'2015-09-30 11:25:45','2015-09-30 11:25:45',5,1,8),(39,1,'2015-09-30 14:48:42','2015-09-30 14:48:42',5,2,7),(40,1,'2015-10-21 16:49:36','2015-10-21 16:49:36',62,3,16),(41,1,'2015-10-26 16:38:08','2015-10-26 16:38:08',121,1,1),(42,1,'2015-10-28 14:59:20','2015-10-28 14:59:20',62,2,6),(43,1,'2015-10-28 15:09:54','2015-10-28 15:09:54',62,4,18),(46,2,'2015-12-09 22:01:06','2015-12-09 22:01:06',140,1,5),(47,1,'2016-01-07 12:24:55','2016-01-07 12:24:55',170,1,4),(48,1,'2016-01-15 10:22:59','2016-01-15 10:22:59',183,1,2),(54,1,'2016-01-15 11:40:50','2016-01-15 11:40:50',180,3,16),(55,4,'2016-02-04 11:39:48','2016-01-18 06:59:58',197,1,5),(56,2,'2016-01-19 10:51:40','2016-01-19 10:51:40',197,1,2),(57,1,'2016-02-01 16:21:04','2016-02-01 16:21:04',152,1,5),(58,1,'2016-02-07 16:20:18','2016-02-07 16:20:18',218,5,22);
/*!40000 ALTER TABLE `orders_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_order`
--

DROP TABLE IF EXISTS `orders_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submitted` tinyint(1) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `bill_as_shipping` tinyint(1) NOT NULL,
  `billing_address` varchar(150) DEFAULT NULL,
  `billing_city` varchar(50) DEFAULT NULL,
  `billing_country` varchar(50) DEFAULT NULL,
  `billing_full_name` varchar(150) DEFAULT NULL,
  `billing_state` varchar(50) DEFAULT NULL,
  `billing_zip` varchar(50) DEFAULT NULL,
  `shipping_address` varchar(150) NOT NULL,
  `shipping_city` varchar(50) NOT NULL,
  `shipping_country` varchar(50) NOT NULL,
  `shipping_full_name` varchar(150) NOT NULL,
  `shipping_method` varchar(50) NOT NULL,
  `shipping_state` varchar(50) NOT NULL,
  `shipping_zip` varchar(50) NOT NULL,
  `total` double NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `trans_id` varchar(50) DEFAULT NULL,
  `tax` double NOT NULL,
  `subtotal` double NOT NULL,
  `discount` double NOT NULL,
  `voucher_id` int(11) DEFAULT NULL,
  `shipping` double NOT NULL,
  `submit_date` datetime DEFAULT NULL,
  `shipped` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_order_user_id_107f2358a426763b_fk_users_user_id` (`user_id`),
  KEY `orders_order_3e8639ee` (`voucher_id`),
  CONSTRAINT `orders_order_user_id_107f2358a426763b_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`),
  CONSTRAINT `orders_order_voucher_id_1b1c205a47603131_fk_shop_voucher_id` FOREIGN KEY (`voucher_id`) REFERENCES `shop_voucher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_order`
--

LOCK TABLES `orders_order` WRITE;
/*!40000 ALTER TABLE `orders_order` DISABLE KEYS */;
INSERT INTO `orders_order` VALUES (1,0,'2015-08-25 14:51:49','2015-08-25 14:51:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(2,0,'2015-09-09 16:27:25','2015-08-25 14:53:14',1,1,'3608 Gulf Blvd','St Pete Beach','USA','Kerry Burt','FL','33706','3608 Gulf Blvd','St Pete Beach','USA','Kerry Burt','USPS Ground Shipping : FREE','FL','33706',0,0,NULL,0,0,0,1,0,NULL,0),(3,0,'2015-08-30 13:46:59','2015-08-25 15:46:06',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(4,0,'2015-08-25 16:35:33','2015-08-25 16:35:21',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(5,0,'2015-08-26 21:04:36','2015-08-26 21:04:36',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(6,0,'2015-08-26 21:57:21','2015-08-26 21:57:21',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(7,0,'2015-08-31 10:43:26','2015-08-26 23:03:41',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(8,0,'2015-08-27 15:25:53','2015-08-27 15:25:53',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(9,0,'2015-08-27 15:25:54','2015-08-27 15:25:54',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(10,0,'2015-08-27 15:25:54','2015-08-27 15:25:54',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(11,0,'2015-08-27 16:04:55','2015-08-27 16:04:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(12,0,'2015-08-31 08:19:21','2015-08-27 17:48:14',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(13,0,'2015-08-27 18:33:31','2015-08-27 18:33:21',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(14,0,'2015-08-27 19:44:26','2015-08-27 19:44:26',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(15,0,'2015-08-28 15:04:03','2015-08-27 19:54:13',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(16,0,'2015-08-28 13:04:04','2015-08-28 13:04:04',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(17,0,'2015-08-28 13:04:04','2015-08-28 13:04:04',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(18,0,'2015-08-28 15:28:18','2015-08-28 15:03:27',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(19,0,'2015-08-28 16:31:59','2015-08-28 16:31:19',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(20,0,'2015-08-28 17:37:25','2015-08-28 17:36:55',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(21,0,'2015-08-28 17:37:52','2015-08-28 17:37:47',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(22,0,'2015-08-31 08:16:54','2015-08-31 08:16:54',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(23,0,'2015-08-31 08:16:54','2015-08-31 08:16:54',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(24,0,'2015-09-01 08:11:10','2015-09-01 08:11:10',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(25,0,'2015-09-01 08:11:10','2015-09-01 08:11:10',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(26,0,'2015-09-02 09:57:34','2015-09-02 09:57:34',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(27,0,'2015-09-02 09:57:34','2015-09-02 09:57:34',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(28,0,'2015-09-03 08:31:49','2015-09-03 08:31:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(29,0,'2015-09-03 08:31:49','2015-09-03 08:31:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(30,0,'2015-09-08 09:59:19','2015-09-08 09:59:19',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(31,0,'2015-09-08 09:59:19','2015-09-08 09:59:19',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(32,0,'2015-09-09 11:55:15','2015-09-09 11:55:15',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(33,0,'2015-09-09 11:55:15','2015-09-09 11:55:15',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(34,0,'2015-09-11 08:53:17','2015-09-11 07:50:49',4,1,'3250 ne 1 st ave','miami','United States','eugenia briceno','FL','33137','3250 ne 1 st ave','miami','United States','eugenia briceno','USPS Ground Shipping : FREE','FL','33137',0,0,NULL,0,0,0,NULL,0,NULL,0),(35,0,'2015-09-11 07:52:28','2015-09-11 07:52:28',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(36,0,'2015-09-11 08:18:31','2015-09-11 08:18:31',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(37,0,'2015-09-11 08:18:31','2015-09-11 08:18:31',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(38,0,'2015-09-11 08:54:20','2015-09-11 08:54:20',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(39,0,'2015-09-14 09:11:10','2015-09-14 09:11:10',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(40,0,'2015-09-14 09:11:10','2015-09-14 09:11:10',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(41,0,'2015-09-15 12:16:15','2015-09-15 12:16:15',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(42,0,'2015-09-15 12:16:15','2015-09-15 12:16:15',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(43,0,'2015-09-16 08:13:42','2015-09-16 08:13:42',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(44,0,'2015-09-16 08:13:42','2015-09-16 08:13:42',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(45,0,'2015-09-16 08:30:35','2015-09-16 08:30:35',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(46,0,'2015-09-17 11:30:44','2015-09-17 11:30:44',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(47,0,'2015-09-17 11:30:44','2015-09-17 11:30:44',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(48,0,'2015-09-17 17:00:14','2015-09-17 16:59:22',5,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(49,0,'2015-09-18 00:12:52','2015-09-18 00:12:52',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(50,0,'2015-09-18 19:25:55','2015-09-18 19:25:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(51,0,'2015-09-21 07:58:00','2015-09-21 07:58:00',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(52,0,'2015-09-21 07:58:00','2015-09-21 07:58:00',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(53,0,'2015-09-22 08:37:36','2015-09-22 08:37:36',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(54,0,'2015-09-25 11:23:08','2015-09-25 11:23:08',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(55,0,'2015-10-01 06:44:37','2015-09-25 11:56:57',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(56,0,'2015-09-30 12:52:48','2015-09-30 12:52:48',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(57,0,'2015-10-01 06:44:20','2015-10-01 06:44:08',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(58,0,'2015-10-23 18:30:56','2015-10-02 10:47:22',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(59,0,'2015-10-05 16:44:12','2015-10-05 16:44:12',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(60,0,'2015-10-10 15:23:50','2015-10-10 15:23:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(61,0,'2015-10-19 18:45:08','2015-10-19 18:45:08',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(62,0,'2015-10-28 15:13:44','2015-10-19 18:45:24',1,1,'hjkhjk','hjkhjk','United States','hjkhj','fl','33131','hjkhjk','hjkhjk','United States','hjkhj','USPS Priority Shipping: $10','fl','33131',0,0,NULL,0,0,0,NULL,0,NULL,0),(63,0,'2015-10-19 18:57:19','2015-10-19 18:57:19',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(64,0,'2015-10-19 18:57:23','2015-10-19 18:57:23',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(65,0,'2015-10-19 18:57:23','2015-10-19 18:57:23',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(66,0,'2015-10-19 19:01:23','2015-10-19 19:01:23',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(67,0,'2015-10-19 19:01:25','2015-10-19 19:01:25',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(68,0,'2015-10-20 11:37:38','2015-10-20 11:37:38',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(69,0,'2015-10-20 11:37:38','2015-10-20 11:37:38',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(70,0,'2015-10-20 15:35:50','2015-10-20 15:35:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(71,0,'2015-10-22 14:32:23','2015-10-22 14:32:23',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(72,0,'2015-10-22 14:33:49','2015-10-22 14:33:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(73,0,'2015-10-24 10:41:28','2015-10-24 10:41:28',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(74,0,'2015-10-26 14:49:20','2015-10-26 14:49:20',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(75,0,'2015-10-26 14:49:20','2015-10-26 14:49:20',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(76,0,'2015-10-26 15:18:50','2015-10-26 15:18:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(77,0,'2015-10-26 15:18:50','2015-10-26 15:18:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(78,0,'2015-10-26 15:19:17','2015-10-26 15:19:17',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(79,0,'2015-10-26 15:19:17','2015-10-26 15:19:17',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(80,0,'2015-10-26 15:19:20','2015-10-26 15:19:20',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(81,0,'2015-10-26 15:19:20','2015-10-26 15:19:20',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(82,0,'2015-10-26 15:19:42','2015-10-26 15:19:42',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(83,0,'2015-10-26 15:19:42','2015-10-26 15:19:42',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(84,0,'2015-10-26 15:19:59','2015-10-26 15:19:59',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(85,0,'2015-10-26 15:19:59','2015-10-26 15:19:59',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(86,0,'2015-10-26 15:20:49','2015-10-26 15:20:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(87,0,'2015-10-26 15:20:49','2015-10-26 15:20:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(88,0,'2015-10-26 15:20:49','2015-10-26 15:20:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(89,0,'2015-10-26 15:20:49','2015-10-26 15:20:49',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(90,0,'2015-10-26 15:20:51','2015-10-26 15:20:51',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(91,0,'2015-10-26 15:20:51','2015-10-26 15:20:51',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(92,0,'2015-10-26 15:20:52','2015-10-26 15:20:52',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(93,0,'2015-10-26 15:20:52','2015-10-26 15:20:52',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(94,0,'2015-10-26 15:20:53','2015-10-26 15:20:53',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(95,0,'2015-10-26 15:20:53','2015-10-26 15:20:53',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(96,0,'2015-10-26 15:20:53','2015-10-26 15:20:53',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(97,0,'2015-10-26 15:20:53','2015-10-26 15:20:53',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(98,0,'2015-10-26 15:20:53','2015-10-26 15:20:53',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(99,0,'2015-10-26 15:20:55','2015-10-26 15:20:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(100,0,'2015-10-26 15:20:55','2015-10-26 15:20:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(101,0,'2015-10-26 15:20:55','2015-10-26 15:20:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(102,0,'2015-10-26 15:20:55','2015-10-26 15:20:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(103,0,'2015-10-26 15:20:55','2015-10-26 15:20:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(104,0,'2015-10-26 15:20:55','2015-10-26 15:20:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(105,0,'2015-10-26 15:22:32','2015-10-26 15:22:32',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(106,0,'2015-10-26 15:22:32','2015-10-26 15:22:32',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(107,0,'2015-10-26 15:22:32','2015-10-26 15:22:32',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(108,0,'2015-10-26 15:22:32','2015-10-26 15:22:32',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(109,0,'2015-10-26 15:22:34','2015-10-26 15:22:34',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(110,0,'2015-10-26 15:22:34','2015-10-26 15:22:34',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(111,0,'2015-10-26 15:22:35','2015-10-26 15:22:35',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(112,0,'2015-10-26 15:22:36','2015-10-26 15:22:36',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(113,0,'2015-10-26 15:22:36','2015-10-26 15:22:36',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(114,0,'2015-10-26 15:22:36','2015-10-26 15:22:36',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(115,0,'2015-10-26 15:22:38','2015-10-26 15:22:38',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(116,0,'2015-10-26 15:22:38','2015-10-26 15:22:38',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(117,0,'2015-10-26 15:22:38','2015-10-26 15:22:38',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(118,0,'2015-10-26 15:22:42','2015-10-26 15:22:42',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(119,0,'2015-10-26 15:22:42','2015-10-26 15:22:42',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(120,0,'2015-10-26 15:22:43','2015-10-26 15:22:43',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(121,0,'2015-10-26 16:21:07','2015-10-26 16:21:07',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(122,0,'2015-10-26 16:44:30','2015-10-26 16:44:30',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(123,0,'2015-10-26 16:45:40','2015-10-26 16:45:40',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(124,0,'2015-10-26 16:58:55','2015-10-26 16:58:55',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(125,0,'2015-10-26 16:58:56','2015-10-26 16:58:56',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(126,0,'2015-10-26 16:59:58','2015-10-26 16:59:58',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(127,0,'2015-10-26 17:00:00','2015-10-26 17:00:00',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(128,0,'2015-10-26 17:00:59','2015-10-26 17:00:59',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(129,0,'2015-10-26 17:01:01','2015-10-26 17:01:01',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(130,0,'2015-10-26 17:07:54','2015-10-26 17:07:54',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(131,0,'2015-10-26 17:09:09','2015-10-26 17:09:09',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(132,0,'2015-11-07 18:34:44','2015-11-07 18:34:44',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(133,0,'2015-11-10 12:41:06','2015-11-10 12:41:06',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(134,0,'2015-11-10 14:16:50','2015-11-10 14:16:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(135,0,'2015-11-14 10:31:40','2015-11-14 10:31:40',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(136,0,'2015-11-16 13:24:48','2015-11-16 13:24:39',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(137,0,'2015-11-19 16:28:38','2015-11-17 11:31:46',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(138,0,'2015-11-19 16:14:17','2015-11-19 16:14:17',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(139,0,'2015-11-19 16:25:50','2015-11-19 16:25:28',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(140,0,'2015-12-08 17:05:59','2015-11-21 14:15:33',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(141,0,'2015-12-01 19:02:40','2015-12-01 19:02:40',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(142,0,'2015-12-01 19:04:07','2015-12-01 19:04:07',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(143,0,'2015-12-03 15:46:13','2015-12-03 15:46:13',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(144,0,'2015-12-10 15:31:23','2015-12-07 16:28:08',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(145,0,'2015-12-08 13:22:57','2015-12-08 13:22:57',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(146,0,'2015-12-08 14:28:21','2015-12-08 14:27:57',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(147,0,'2015-12-08 14:29:23','2015-12-08 14:29:23',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(148,0,'2015-12-08 16:28:02','2015-12-08 16:28:02',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(149,0,'2015-12-08 16:29:17','2015-12-08 16:29:17',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(150,0,'2015-12-08 16:29:17','2015-12-08 16:29:17',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(151,0,'2015-12-08 16:29:17','2015-12-08 16:29:17',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(152,0,'2015-12-09 12:46:04','2015-12-09 12:46:04',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(153,0,'2015-12-14 14:53:12','2015-12-14 14:53:05',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(154,0,'2015-12-14 14:55:38','2015-12-14 14:53:52',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(155,0,'2015-12-15 11:16:33','2015-12-15 11:16:23',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(156,0,'2015-12-16 16:35:50','2015-12-16 12:48:26',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(157,0,'2015-12-23 03:38:34','2015-12-21 09:58:22',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(158,0,'2015-12-30 16:37:05','2015-12-26 06:06:50',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(159,0,'2015-12-29 09:55:26','2015-12-29 09:55:26',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(160,0,'2015-12-29 09:55:26','2015-12-29 09:55:26',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(161,0,'2015-12-30 11:47:51','2015-12-30 11:47:51',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(162,0,'2015-12-30 11:47:51','2015-12-30 11:47:51',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(163,0,'2016-01-04 09:24:58','2016-01-04 09:24:58',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(164,0,'2016-01-04 09:24:58','2016-01-04 09:24:58',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(165,0,'2016-01-05 09:52:35','2016-01-05 09:52:35',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(166,0,'2016-01-05 09:52:35','2016-01-05 09:52:35',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(167,0,'2016-01-05 15:11:06','2016-01-05 15:11:06',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(168,0,'2016-01-06 14:59:52','2016-01-06 14:59:30',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(169,0,'2016-01-07 11:34:20','2016-01-07 11:34:20',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(170,0,'2016-01-07 12:26:39','2016-01-07 12:23:28',7,1,'123 Address','new york','United States','blah blij','ny','11001','123 Address','new york','United States','blah blij','USPS Priority Shipping: $10','ny','11001',0,0,NULL,0,0,0,NULL,0,NULL,0),(171,0,'2016-01-07 15:49:29','2016-01-07 13:19:55',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(172,0,'2016-01-07 13:33:14','2016-01-07 13:33:08',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(173,0,'2016-01-07 15:04:12','2016-01-07 15:02:57',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(174,0,'2016-01-07 15:04:59','2016-01-07 15:04:49',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(175,0,'2016-01-07 15:05:29','2016-01-07 15:05:20',6,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(176,0,'2016-01-07 15:47:07','2016-01-07 15:46:40',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(177,0,'2016-01-07 15:50:32','2016-01-07 15:50:12',6,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(178,0,'2016-01-07 15:50:38','2016-01-07 15:50:38',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(179,0,'2016-01-07 15:53:06','2016-01-07 15:52:44',6,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(180,0,'2016-01-15 11:05:12','2016-01-07 15:53:14',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(181,0,'2016-01-07 16:48:25','2016-01-07 16:48:07',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(182,0,'2016-01-09 16:58:04','2016-01-09 16:58:04',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(183,0,'2016-01-09 23:58:33','2016-01-09 23:58:24',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(184,0,'2016-01-11 13:47:07','2016-01-11 13:46:03',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(185,0,'2016-01-11 13:50:39','2016-01-11 13:50:39',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(186,0,'2016-01-11 13:50:39','2016-01-11 13:50:39',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(187,0,'2016-01-11 15:28:14','2016-01-11 13:54:10',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(188,0,'2016-01-11 13:57:27','2016-01-11 13:57:19',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(189,0,'2016-01-11 14:08:34','2016-01-11 14:08:10',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(190,0,'2016-01-11 14:13:33','2016-01-11 14:13:33',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(191,0,'2016-01-11 15:28:21','2016-01-11 15:28:21',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(192,0,'2016-01-11 15:36:27','2016-01-11 15:36:27',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(193,0,'2016-01-12 10:40:12','2016-01-12 10:40:12',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(194,0,'2016-01-12 13:55:42','2016-01-12 13:55:27',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(195,0,'2016-01-12 14:06:17','2016-01-12 14:06:10',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(196,0,'2016-01-12 14:56:07','2016-01-12 14:55:51',2,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(197,0,'2016-01-12 14:56:31','2016-01-12 14:56:17',1,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(198,0,'2016-01-12 18:27:20','2016-01-12 18:27:07',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(199,0,'2016-01-12 18:27:59','2016-01-12 18:27:59',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(200,0,'2016-01-15 11:02:19','2016-01-15 11:01:40',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(201,0,'2016-01-15 11:03:22','2016-01-15 11:03:19',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(202,0,'2016-01-15 11:03:48','2016-01-15 11:03:48',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(203,0,'2016-01-15 12:00:04','2016-01-15 11:59:34',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(204,0,'2016-01-17 15:17:27','2016-01-17 15:17:27',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(205,0,'2016-01-17 15:17:27','2016-01-17 15:17:27',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(206,0,'2016-01-22 14:02:50','2016-01-22 14:02:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(207,0,'2016-01-22 14:02:51','2016-01-22 14:02:51',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(208,0,'2016-01-23 17:33:59','2016-01-23 17:33:59',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(209,0,'2016-01-27 14:14:41','2016-01-27 14:14:41',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(210,0,'2016-02-02 15:24:34','2016-02-02 15:24:34',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(211,0,'2016-02-07 17:30:55','2016-02-03 14:38:48',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(212,0,'2016-02-04 09:50:57','2016-02-04 09:50:57',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(213,0,'2016-02-04 10:51:46','2016-02-04 10:51:46',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(214,0,'2016-02-04 14:39:28','2016-02-04 14:39:08',3,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(215,0,'2016-02-04 14:54:19','2016-02-04 14:54:19',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(216,0,'2016-02-04 15:05:50','2016-02-04 15:05:50',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(217,0,'2016-02-04 15:15:31','2016-02-04 15:15:31',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(218,0,'2016-02-07 16:19:12','2016-02-07 16:19:12',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(219,0,'2016-02-07 18:16:45','2016-02-07 17:59:42',4,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0),(220,0,'2016-02-08 08:05:26','2016-02-08 08:05:26',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','','','',0,0,NULL,0,0,0,NULL,0,NULL,0);
/*!40000 ALTER TABLE `orders_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_category`
--

DROP TABLE IF EXISTS `shop_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `order` smallint(6) NOT NULL,
  `lft` int(10) unsigned NOT NULL,
  `rght` int(10) unsigned NOT NULL,
  `tree_id` int(10) unsigned NOT NULL,
  `level` int(10) unsigned NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_category_caf7cc51` (`lft`),
  KEY `shop_category_3cfbd988` (`rght`),
  KEY `shop_category_656442a0` (`tree_id`),
  KEY `shop_category_c9e9a848` (`level`),
  KEY `shop_category_6be37982` (`parent_id`),
  CONSTRAINT `shop_category_parent_id_134c6a79ca7fc9e6_fk_shop_category_id` FOREIGN KEY (`parent_id`) REFERENCES `shop_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_category`
--

LOCK TABLES `shop_category` WRITE;
/*!40000 ALTER TABLE `shop_category` DISABLE KEYS */;
INSERT INTO `shop_category` VALUES (1,'Men','men',0,1,6,1,0,NULL),(2,'Women','women',0,1,10,2,0,NULL),(3,'Tops','tops',0,2,3,1,1,1),(4,'Bottoms','bottoms',0,4,5,1,1,1),(6,'Bottoms','bottoms',0,2,3,2,1,2),(7,'Dresses','dresses',0,4,5,2,1,2),(8,'Tops','tops',3,8,9,2,1,2),(9,'Jumpsuits','jumpsuits',0,6,7,2,1,2);
/*!40000 ALTER TABLE `shop_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_color`
--

DROP TABLE IF EXISTS `shop_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `color` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_color`
--

LOCK TABLES `shop_color` WRITE;
/*!40000 ALTER TABLE `shop_color` DISABLE KEYS */;
INSERT INTO `shop_color` VALUES (1,'white','#ffffff'),(2,'Pink','#e3b3e3'),(3,'Royal Blue','#0c1fed'),(5,'Red','#fc2600'),(6,'green','#19ff47'),(7,'black','#000000'),(8,'brown','#856422'),(9,'lavander','#cc85cc'),(10,'loona top ','white');
/*!40000 ALTER TABLE `shop_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_designer`
--

DROP TABLE IF EXISTS `shop_designer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_designer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `icon_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_designer_icon_id_1204fa3b7cdd898c_uniq` (`icon_id`),
  CONSTRAINT `shop_designe_icon_id_1204fa3b7cdd898c_fk_filer_image_file_ptr_id` FOREIGN KEY (`icon_id`) REFERENCES `filer_image` (`file_ptr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_designer`
--

LOCK TABLES `shop_designer` WRITE;
/*!40000 ALTER TABLE `shop_designer` DISABLE KEYS */;
INSERT INTO `shop_designer` VALUES (1,'Chanel',1),(2,'Gucci',8),(3,'fendi',15),(4,'mofamofamofa',NULL);
/*!40000 ALTER TABLE `shop_designer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_image`
--

DROP TABLE IF EXISTS `shop_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(10) unsigned NOT NULL,
  `image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_image_product_id_87d0560281d2d54_fk_shop_product_id` (`product_id`),
  KEY `shop_image_f33175e6` (`image_id`),
  CONSTRAINT `shop_image_image_id_16a42476b5b55cf0_fk_filer_image_file_ptr_id` FOREIGN KEY (`image_id`) REFERENCES `filer_image` (`file_ptr_id`),
  CONSTRAINT `shop_image_product_id_87d0560281d2d54_fk_shop_product_id` FOREIGN KEY (`product_id`) REFERENCES `shop_product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_image`
--

LOCK TABLES `shop_image` WRITE;
/*!40000 ALTER TABLE `shop_image` DISABLE KEYS */;
INSERT INTO `shop_image` VALUES (1,7,2,1),(2,3,4,2),(3,4,5,2),(8,4,13,3),(9,5,14,3),(10,4,18,4),(11,5,16,4),(12,6,17,4),(15,2,29,5),(16,0,21,5);
/*!40000 ALTER TABLE `shop_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_product`
--

DROP TABLE IF EXISTS `shop_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  `category_id` int(11) NOT NULL,
  `designer_id` int(11) NOT NULL,
  `description` longtext,
  `short_description` longtext,
  `price` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_product_category_id_75fd73b3381b052e_fk_shop_category_id` (`category_id`),
  KEY `shop_product_designer_id_468e5035530ce395_fk_shop_designer_id` (`designer_id`),
  KEY `shop_product_b068931c` (`name`),
  CONSTRAINT `shop_product_category_id_75fd73b3381b052e_fk_shop_category_id` FOREIGN KEY (`category_id`) REFERENCES `shop_category` (`id`),
  CONSTRAINT `shop_product_designer_id_468e5035530ce395_fk_shop_designer_id` FOREIGN KEY (`designer_id`) REFERENCES `shop_designer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_product`
--

LOCK TABLES `shop_product` WRITE;
/*!40000 ALTER TABLE `shop_product` DISABLE KEYS */;
INSERT INTO `shop_product` VALUES (1,'Test Women Dress','2015-08-25 15:15:41','2015-08-08 15:50:34',7,1,'<p>This is a long description</p>\r\n','this is a short description',200),(2,'Test Dress 2','2015-08-25 15:15:51','2015-08-09 12:37:16',7,1,'<p>Long Description</p>\r\n','Short Description',290),(3,'Pauls Dress','2015-08-27 19:34:52','2015-08-26 19:09:24',7,2,'<p>Long Description</p>\r\n','Short Description',450),(4,'fendi dress','2015-08-28 17:35:17','2015-08-28 17:00:26',7,3,'<p>Long des for fendi dress</p>\r\n','this is a fendi dress',50),(5,'loona top ','2016-02-04 14:44:55','2015-08-31 11:07:57',8,4,'<p>tulip shaped breast cups,&nbsp;pointy tip in center to make you feel lunar and powerful. super warrior cut to expose your body and feel/ or make you&nbsp;free&nbsp;</p>\r\n','basket weave fabric, strapless top.',60);
/*!40000 ALTER TABLE `shop_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_size`
--

DROP TABLE IF EXISTS `shop_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_size`
--

LOCK TABLES `shop_size` WRITE;
/*!40000 ALTER TABLE `shop_size` DISABLE KEYS */;
INSERT INTO `shop_size` VALUES (1,'2','2'),(2,'4','4'),(3,'6','6'),(4,'8','8'),(5,'10','10'),(6,'12','12'),(8,'xl','xl');
/*!40000 ALTER TABLE `shop_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_stock`
--

DROP TABLE IF EXISTS `shop_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(10) unsigned NOT NULL,
  `color_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `order` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shop_stock_product_id_40f382015d35b8f6_uniq` (`product_id`,`color_id`,`size_id`),
  KEY `shop_stock_color_id_7474a1b2feb4d381_fk_shop_color_id` (`color_id`),
  KEY `shop_stock_size_id_57d102d2614d4d68_fk_shop_size_id` (`size_id`),
  KEY `shop_stock_image_id_33844650315f57fd_uniq` (`image_id`),
  CONSTRAINT `shop_stock_color_id_7474a1b2feb4d381_fk_shop_color_id` FOREIGN KEY (`color_id`) REFERENCES `shop_color` (`id`),
  CONSTRAINT `shop_stock_image_id_33844650315f57fd_fk_filer_image_file_ptr_id` FOREIGN KEY (`image_id`) REFERENCES `filer_image` (`file_ptr_id`),
  CONSTRAINT `shop_stock_product_id_500797f6f10e255f_fk_shop_product_id` FOREIGN KEY (`product_id`) REFERENCES `shop_product` (`id`),
  CONSTRAINT `shop_stock_size_id_57d102d2614d4d68_fk_shop_size_id` FOREIGN KEY (`size_id`) REFERENCES `shop_size` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_stock`
--

LOCK TABLES `shop_stock` WRITE;
/*!40000 ALTER TABLE `shop_stock` DISABLE KEYS */;
INSERT INTO `shop_stock` VALUES (1,20,1,1,1,2,0),(2,10,1,1,2,2,1),(3,12,1,1,3,2,2),(4,4,2,1,2,3,3),(5,10,2,1,3,3,4),(6,5,3,2,1,4,0),(7,5,3,2,3,4,1),(8,15,2,1,5,3,5),(15,1,5,3,1,13,0),(16,1,5,3,2,13,1),(17,1,5,3,3,13,2),(18,2,8,4,8,18,1),(19,1,6,4,5,18,0),(22,1,2,5,1,29,0);
/*!40000 ALTER TABLE `shop_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_voucher`
--

DROP TABLE IF EXISTS `shop_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_voucher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `code` varchar(10) NOT NULL,
  `discount_type` smallint(5) unsigned NOT NULL,
  `amount` double NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_voucher_category_id_2e59838114222efb_fk_shop_category_id` (`category_id`),
  CONSTRAINT `shop_voucher_category_id_2e59838114222efb_fk_shop_category_id` FOREIGN KEY (`category_id`) REFERENCES `shop_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_voucher`
--

LOCK TABLES `shop_voucher` WRITE;
/*!40000 ALTER TABLE `shop_voucher` DISABLE KEYS */;
INSERT INTO `shop_voucher` VALUES (1,'Womens special promotion','KERRYB',1,20,'2015-09-09','2015-09-30',2);
/*!40000 ALTER TABLE `shop_voucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taggit_tag`
--

DROP TABLE IF EXISTS `taggit_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taggit_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taggit_tag`
--

LOCK TABLES `taggit_tag` WRITE;
/*!40000 ALTER TABLE `taggit_tag` DISABLE KEYS */;
INSERT INTO `taggit_tag` VALUES (1,'flamingo','flamingo'),(2,'park','park'),(3,'new','new'),(4,'event','event'),(5,'april','april'),(6,'kerry','kerry'),(7,'audio','audio'),(8,'mp3','mp3'),(9,'testing','testing'),(10,'pop','pop'),(11,'#Madonna','madonna'),(12,'#sexy','sexy'),(14,'Madonna','madonna_1'),(16,'sexy','sexy_1'),(17,'party','party'),(18,'drinking','drinking'),(19,'watchthis','watchthis'),(20,'wow','wow'),(21,'video','video'),(22,'dance','dance'),(23,'freedom','freedom'),(24,'white','white'),(25,'snow','snow'),(26,'#superheroes','superheroes'),(27,'#fivesenes','fivesenes'),(28,'#legends','legends'),(29,'#mofamofamofa','mofamofamofa'),(31,'mofamofamofa','mofamofamofa_1'),(33,'fivesenes','fivesenes_1'),(35,'superheroes','superheroes_1'),(37,'legends','legends_1'),(38,'bebetter','bebetter'),(39,'rawhuman','rawhuman'),(40,'yogis','yogis'),(41,'natureami','natureami'),(42,'environment','environment'),(43,'vibrations','vibrations'),(44,'consumption','consumption'),(45,'heart','heart'),(46,'life','life'),(47,'love','love'),(48,'proverbs','proverbs'),(49,'darkearth','darkearth'),(51,'@natureami','natureami_1'),(52,'blackrocks','blackrocks'),(53,'coffee','coffee'),(54,'cubico','cubico'),(55,'tasting','tasting'),(56,'health','health'),(57,'plane','plane'),(58,'stopem','stopem'),(59,'germs','germs'),(60,'@abzingg','abzingg'),(61,'orangesinsky','orangesinsky'),(80,'write','write'),(81,'Faulkner','faulkner'),(82,'advice','advice'),(83,'learn','learn'),(123,'eggs','eggs'),(124,'mofa','mofa'),(125,'eggwhites','eggwhites'),(126,'yolks','yolks'),(127,'test','test'),(128,'picture','picture'),(129,'size','size'),(130,'adobe','adobe');
/*!40000 ALTER TABLE `taggit_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taggit_taggeditem`
--

DROP TABLE IF EXISTS `taggit_taggeditem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taggit_taggeditem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `object_id` int(11) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `taggi_content_type_id_62e0524705c3ec8f_fk_django_content_type_id` (`content_type_id`),
  KEY `taggit_taggeditem_tag_id_6318217c0d95e0d2_fk_taggit_tag_id` (`tag_id`),
  KEY `taggit_taggeditem_af31437c` (`object_id`),
  CONSTRAINT `taggi_content_type_id_62e0524705c3ec8f_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `taggit_taggeditem_tag_id_6318217c0d95e0d2_fk_taggit_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `taggit_tag` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=312 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taggit_taggeditem`
--

LOCK TABLES `taggit_taggeditem` WRITE;
/*!40000 ALTER TABLE `taggit_taggeditem` DISABLE KEYS */;
INSERT INTO `taggit_taggeditem` VALUES (29,5,14,10),(30,6,14,6),(32,1,14,6),(50,8,14,16),(51,8,14,14),(60,3,9,4),(61,5,9,18),(73,9,14,16),(74,9,14,14),(75,6,9,21),(82,7,9,6),(86,11,14,24),(87,11,14,25),(88,11,14,22),(89,11,14,23),(99,3,14,6),(103,2,14,8),(104,2,14,6),(105,2,14,7),(118,12,14,33),(119,12,14,35),(120,12,14,37),(121,12,14,31),(146,13,14,41),(147,13,14,42),(148,13,14,43),(149,13,14,44),(154,14,14,48),(155,14,14,45),(156,14,14,46),(157,14,14,47),(167,15,14,49),(168,15,14,51),(169,15,14,52),(190,16,14,56),(191,16,14,57),(192,16,14,58),(193,16,14,59),(194,17,14,51),(195,17,14,60),(196,17,14,61),(213,1,9,1),(214,1,9,2),(217,2,9,3),(218,2,9,4),(222,4,14,9),(224,7,14,4),(225,27,14,80),(226,27,14,81),(227,27,14,82),(228,27,14,83),(229,4,9,17),(230,28,14,6),(233,29,14,6),(235,30,14,6),(236,31,14,6),(271,38,14,6),(272,39,14,6),(274,40,14,6),(286,44,14,21),(287,45,14,56),(288,45,14,123),(289,45,14,124),(290,45,14,125),(291,45,14,126),(292,8,9,55),(293,8,9,53),(294,8,9,54),(295,8,9,31),(300,46,14,128),(301,46,14,129),(302,46,14,124),(303,46,14,127),(304,47,14,130),(311,5,22,127);
/*!40000 ALTER TABLE `taggit_taggeditem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user`
--

DROP TABLE IF EXISTS `users_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  `billing_address` varchar(150) DEFAULT NULL,
  `billing_city` varchar(50) DEFAULT NULL,
  `billing_country` varchar(50) DEFAULT NULL,
  `billing_full_name` varchar(150) DEFAULT NULL,
  `billing_state` varchar(50) DEFAULT NULL,
  `billing_zip` varchar(50) DEFAULT NULL,
  `shipping_address` varchar(150) DEFAULT NULL,
  `shipping_city` varchar(50) DEFAULT NULL,
  `shipping_country` varchar(50) DEFAULT NULL,
  `shipping_full_name` varchar(150) DEFAULT NULL,
  `shipping_state` varchar(50) DEFAULT NULL,
  `shipping_zip` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user`
--

LOCK TABLES `users_user` WRITE;
/*!40000 ALTER TABLE `users_user` DISABLE KEYS */;
INSERT INTO `users_user` VALUES (1,'pbkdf2_sha256$20000$HRUV4vLoOEBN$8URycVUfhxliFW3jv4h8PvPuN0YRWpPRPh74zmE2EWw=','2016-01-12 14:56:31','admin@mofa.com',1,1,1,'2015-08-25 15:13:34',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'pbkdf2_sha256$20000$5KDTvN42e5NX$g74PvappffhAhusmARUmvkfTZGdGC5x0KC8TqsvzM4M=','2016-01-12 14:56:07','kerry@recme.com',1,1,1,'2015-08-25 15:14:54',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'pbkdf2_sha256$20000$wn2yNI4H7ZMp$WcEB+UJZFgfkDBGBN6QFsYigfCqUbZ8jWuyx71nhXtk=','2016-02-04 14:39:28','Issac@jacober.com',1,1,1,'2015-08-27 18:32:55',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'pbkdf2_sha256$20000$8ZNp6ww1DafZ$PwjatqB1kdZpmMMGozuPBRmUKB0UEsfoI0U6kytXy8w=','2016-02-07 18:16:45','eugenia@mofamofamofa.com',1,1,1,'2015-09-11 08:50:21',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'9542921376'),(5,'pbkdf2_sha256$20000$ZuImCVOIwBl2$9u8OuEBkCtfjZeDQRVfOh3AdsXMFO9pnIAk2uLXiLzQ=','2015-09-17 17:00:14','kerryp@recme.com',0,0,1,'2015-09-17 17:00:14',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'pbkdf2_sha256$20000$OwVNgIDydyTZ$LHYNT83ibuuP9Y8gcS3CP/m8jWjsKEGI/tDWTSB2WWA=','2016-01-07 15:53:06','paul@jacober.com',1,1,1,'2016-01-06 15:01:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'pbkdf2_sha256$20000$x0othv3SR83a$lJeIIDuzg4MO9whTbnKo1aJBe94jMEKvds8pi0LExUQ=','2016-01-07 12:25:21','123@123.com',0,0,1,'2016-01-07 12:25:21',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user_groups`
--

DROP TABLE IF EXISTS `users_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `users_user_groups_group_id_2f68d48d4a1739d2_fk_auth_group_id` (`group_id`),
  CONSTRAINT `users_user_groups_group_id_2f68d48d4a1739d2_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `users_user_groups_user_id_5a589bf89ab6090b_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user_groups`
--

LOCK TABLES `users_user_groups` WRITE;
/*!40000 ALTER TABLE `users_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user_user_permissions`
--

DROP TABLE IF EXISTS `users_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `users_user__permission_id_600d52ebc008620d_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `users_user__permission_id_600d52ebc008620d_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `users_user_user_permis_user_id_317f5474dc092747_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user_user_permissions`
--

LOCK TABLES `users_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `users_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-13 13:27:43
