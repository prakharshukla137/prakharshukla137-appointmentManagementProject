create database Inshine1;
use Inshine1;
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2023 at 03:17 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inshine`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `availablity_id` int(11) DEFAULT NULL,
  `subtotal` varchar(10) NOT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `created_at` timestamp  DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `user_id`, `service_id`, `location_id`, `availablity_id`, `subtotal`, `date`, `time`, `created_at`) VALUES
(1, 18, 1, 1, NULL, '', NULL, NULL, '2023-03-09 14:01:55');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `location_address` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `location_address`, `created_at`) VALUES
(1, 'Nashik', '2023-03-09 14:03:07'),
(2, 'Bhopal', '2023-03-09 14:03:07'),
(4, 'Pune', '2023-03-09 14:03:07');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `user_type` enum('admin','user') NOT NULL DEFAULT 'user',
  `created_at` timestamp DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`user_id`, `name`, `mobile`, `email_id`, `password`, `user_type`, `created_at`) VALUES
(18, 'shivani', '9876541200', 'shivani@gmail.com', '$2a$10$yBTyXl9HVrT8Ub88zFduH.sUT.Xm9pPMk1lhJwxUhaBmBBDqXN3Fy', 'admin', '2023-03-04 12:04:36'),
(19, 'Sia', '9876541200', 'sia@gmail.com', '$2a$10$FcPD8GeDq1IRnCLRpeCpl.FTyoCRp82ZqJpqU5S1pT.0RGefhj8v.', 'user', '2023-03-04 12:24:18'),
(20, 'Rani', '9865774455', 'rani@gmail.com', '$2a$10$iSV4Dg6St2C8FEDA6.xDfu1ukr/aFq1npmhs030m7LDmJQcebwuN.', 'user', '2023-03-05 16:36:30'),
(21, 'neha', '9865774422', 'neha@gmail.com', '$2a$10$3zujk0BvojH9Q/BHP5IzgOQ4SmTX/vVfNqeokwKhC1bsveVRHD86G', 'user', '2023-03-07 21:04:03'),
(22, 'varsha', '8874775599', 'varsha@gmail.com', '$2a$10$u8yaZezRW/dVenobp2O8K.VcixisFL7rny1qA2yAjfrPPr/FQxM..', 'user', '2023-03-07 21:13:06');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(50) NOT NULL,
  `service_price` varchar(30) NOT NULL,
  `service_description` text NOT NULL,
  `service_duration` varchar(10) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` longtext DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `service_price`, `service_description`, `service_duration`, `category_id`, `image`, `created_at`) VALUES
(1, 'VLCC Facial Package', '896', 'VLCC Insta Glow Facial,\r\nFull Face & Neck Bleach(OXY),\r\nContact-Less Threading - Eyebro,\r\nContact-Less Threading - Upper lip.', '75 ', 1, 'https://www.homesalon.in/uploads/products/1653575802.jpg', '2023-03-09 14:03:52'),
(2, ' Full Body Bleach', '1399', 'For all skin type', '45 ', 2, 'https://www.homesalon.in/uploads/products/1653579498.jpg', '2023-03-09 14:03:52'),
(3, ' Advance Hair Cut', '499', 'Bob, Blunt, Layer', '25 ', 4, 'https://www.homesalon.in/uploads/products/1653640994.jpg', '2023-03-09 14:03:52'),
(4, 'Vedic Valley - Manicure & Pedicure', '680', 'Smooth & supple hands and legs', '60 ', 3, 'https://www.homesalon.in/uploads/products/1653580881.jpg', '2023-03-09 14:03:52'),
(5, 'Half Legs Bleach', '299', 'For all skin type', '15', 2, 'https://www.homesalon.in/uploads/products/1653579103.jpg', '2023-03-09 14:03:52'),
(8, ' VLCC Fruit Facial', '599', 'Cheryl\'s Facial - OxyBlast/GloVite/Vitalift by L\'oreal Oxy - Bleach (Face & Neck) Threading - Eyebrows, Upper Lips & Forehead Head Massage (15 Min)', '45', 1, 'https://www.homesalon.in/uploads/products/1653576225.jpg', '2023-03-09 14:03:52'),
(9, 'VLCC Anti Tan Facial', '659', 'VLCC Insta Glow Facial\r\nFull Face & Neck Bleach(OXY)\r\nContact-Less Threading - Eyebrows\r\nContact-Less Threading - Upper lip', '45', 1, 'https://www.homesalon.in/uploads/products/1653576325.jpg', '2023-03-09 14:03:52'),
(10, 'Under Arms Bleach', '149', ' For all skin type', '10', 2, 'https://www.homesalon.in/uploads/products/1653578912.jpg', '2023-03-09 14:03:52'),
(11, 'O3+ Mani & Pedi Luxury Crystal Spa', '960', 'Smooth & supple hands and legs', '60', 3, 'https://www.homesalon.in/uploads/products/1653581074.jpg', '2023-03-09 14:03:52'),
(12, 'Classic Mani & Pedi', '499', 'Smooth & supple hands and legs\r\n', '60', 3, 'https://www.homesalon.in/uploads/products/1653580758.jpg', '2023-03-09 14:03:52'),
(15, ' Hair Splitting - S', '299', ' Hair Splitting - Small', '20', 4, 'https://www.homesalon.in/uploads/products/1653643336.jpg', '2023-03-09 14:03:52'),
(16, 'Fashion Shade Highlights', '349', ' Fashion Shade Highlights (Per Strip)  Fashion Shade includes Blue, Orange, Green & Red', '30', 4, 'https://www.homesalon.in/uploads/products/1653724861.jpg', '2023-03-09 14:03:52'),
(20, ' Luxury Party Makeup', '2599', 'Advance Makeup  Advance Hair Do  Complimentary Saree Draping  Professional Makeup Artist\r\n', '90', 5, 'https://www.homesalon.in/uploads/products/1653729505.jpg', '2023-03-09 14:03:52'),
(21, ' MAC HD Make UP', '4999', ' Premium MAC HD Make up  Advance Hair Do  Dress/Saree Draping  Professional Makeup Artist', '180', 5, 'https://www.homesalon.in/uploads/products/1653730294.jpg', '2023-03-09 14:03:52'),
(22, 'Glamour Touch Group Make UP', '8699', 'Light touch party Makeup  Basic Hair: Straightening, Basic bun , Curls  Package for group of 5 people  Above 5 people -Rs 1700 per person', '360', 5, 'https://www.homesalon.in/uploads/products/1653749561.jpg', '2023-03-09 14:03:52'),
(23, 'Threading - Eyebrows', '25', 'Give yourself a polished look by clearing up your unwanted brow hairs.', '10', 10, 'https://www.homesalon.in/uploads/products/1657009799.jpg', '2023-03-09 14:03:52'),
(24, 'Threading - Upper lip', '20', 'Redefine your girlish look by removing unwanted upper lip hair.\r\n', '10', 10, 'https://www.homesalon.in/uploads/products/1657009847.jpg', '2023-03-09 14:03:52'),
(25, 'Threading - Full Face', '99', 'Removal of all unwanted hair from your face will give you a flawless look.', '30', 10, 'https://www.homesalon.in/uploads/products/1657010072.jpeg', '2023-03-09 14:03:52');

-- --------------------------------------------------------

--
-- Table structure for table `service_availablity`
--

CREATE TABLE `service_availablity` (
  `availablity_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(15) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `service_category`
--

CREATE TABLE `service_category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `image` longtext DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service_category`
--

INSERT INTO `service_category` (`category_id`, `category_name`, `image`, `created_at`) VALUES
(1, 'FACIAL & CLEANUP', 'https://www.homesalon.in/uploads/category/1653328024.jpg', '2023-03-09 14:04:23'),
(2, 'BLEACH & D-TAN', 'https://www.homesalon.in/uploads/category/1653328104.jpg', '2023-03-09 14:04:23'),
(3, 'MANI-PADI', 'https://www.homesalon.in/uploads/category/1653328163.jpg', '2023-03-09 14:04:23'),
(4, 'HAIR CARE', 'https://www.homesalon.in/uploads/category/1653328296.jpg', '2023-03-09 14:04:23'),
(5, 'MAKEUP', 'https://www.homesalon.in/uploads/category/1665067519.jpg', '2023-03-09 14:04:23'),
(10, 'THREADING', 'https://www.homesalon.in/uploads/category/1653330162.jpg', '2023-03-09 14:04:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `cart_ibfk_3` (`location_id`),
  ADD KEY `availablity_id` (`availablity_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `category_id` (`category_id`);
  
  
  ALTER TABLE `services` DROP PRIMARY KEY;
DELETE FROM `services` WHERE `service_id` = 1;
ALTER TABLE `services` ADD PRIMARY KEY (`service_id`), ADD KEY `category_id` (`category_id`);


--
-- Indexes for table `service_availablity`
--
ALTER TABLE `service_availablity`
  ADD PRIMARY KEY (`availablity_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `service_category`
--
ALTER TABLE `service_category`
  ADD PRIMARY KEY (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `service_availablity`
--
ALTER TABLE `service_availablity`
  MODIFY `availablity_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_category`
--
ALTER TABLE `service_category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  ADD CONSTRAINT `cart_ibfk_4` FOREIGN KEY (`availablity_id`) REFERENCES `service_availablity` (`availablity_id`),
  ADD CONSTRAINT `cart_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `register` (`user_id`);

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `service_category` (`category_id`);

--
-- Constraints for table `service_availablity`
--
ALTER TABLE `service_availablity`
  ADD CONSTRAINT `service_availablity_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `service_category` (`category_id`);
COMMIT;
SET FOREIGN_KEY_CHECKS=0;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
