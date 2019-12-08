-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2019 at 04:02 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hirings`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `location` varchar(40) DEFAULT NULL,
  `required_skill` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `date_updated` date DEFAULT NULL,
  `created_by` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `email`, `phone_number`, `location`, `required_skill`, `description`, `logo`, `date_created`, `date_updated`, `created_by`) VALUES
(1, 'PT.Rajawali1', 'mfadel@gmail', '0852789', 'jakarta', 'php', 'i want to join', '1575389364052.jpeg', '2019-12-03', '2019-12-03', '5'),
(2, 'pertamini', 'abcd@gmail.com', '081234567', 'jakarta', 'undefined', 'im programmer', '1575652991543.jpeg', '2019-12-07', '2019-12-07', '62'),
(3, 'arkademi', 'abcd@gmail.com', '0987654', 'jakarta', 'php', ' programmer company', '1575653164303.jpeg', '2019-12-07', '2019-12-07', '63');

-- --------------------------------------------------------

--
-- Table structure for table `engineers`
--

CREATE TABLE `engineers` (
  `id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `location` varchar(40) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `showcase` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `date_updated` date DEFAULT NULL,
  `created_by` varchar(80) DEFAULT NULL,
  `photo` varchar(225) DEFAULT NULL,
  `profession` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineers`
--

INSERT INTO `engineers` (`id`, `name`, `date_of_birth`, `email`, `phone_number`, `location`, `skill`, `showcase`, `description`, `date_created`, `date_updated`, `created_by`, `photo`, `profession`) VALUES
(3, 'Teguh setiawan', '1995-03-26', 'teguh@gmail', '0852789', 'jakarta', 'Javascript', 'www.github', 'i want to join', '2019-12-04', '2019-12-04', '6', '1575434563322.jpeg', 'Backend enginering'),
(4, 'Anggi Gusti Wiliam', '1995-03-26', 'anggi@gmail', '085278989788', 'jakarta', 'php', 'www.github', 'i want to join', '2019-12-04', '2019-12-04', '7', '1575435210398.jpeg', 'Frontend'),
(7, 'Yusuf abdillah Putra', '2019-12-01', 'abcd@gmail.com', '0987654', 'Pekanbaru', 'javascript', 'www.github.com', 'im programmer', '2019-12-04', '2019-12-05', '10', '1575554674610.jpeg', 'programmer'),
(9, 'Muhammad Febriyansah', '1995-03-26', 'ebi@gmail', '085278989788', 'Palu', 'javascript', 'www.github', 'i want to join', '2019-12-04', '2019-12-04', '12', '1575437377416.jpeg', 'programmer'),
(13, 'Erdin Suharyadi', '2019-12-01', 'erdin@gmail', '0987654', 'Karawang', 'javascript', 'www.github.com', 'im programmer', '2019-12-05', '2019-12-05', '41', '1575528212396.jpeg', 'programmer'),
(18, 'jokowidodo', '2019-12-02', 'abcd@gmail.com', '098765', 'jakarta', 'javascript', 'www.github.com', 'im programmer', '2019-12-05', '2019-12-08', '47', '1575786793244.jpeg', 'programmer'),
(19, 'Ronii', '2019-12-01', 'abcd@gmail.com', '098765', 'jakarta', 'php', 'www.github.com', 'im programmer', '2019-12-06', '2019-12-06', '49', '1575605885501.jpeg', 'IT solutions'),
(21, 'Mulyadik', '2019-12-01', 'abcd@gmail.com', '098765', 'jakarta', 'aaa', 'www.github.com', 'im programmer', '2019-12-06', '2019-12-06', '58', '1575642977927.jpeg', 'presiden'),
(22, 'Douglas jauhar1', '2019-12-01', 'abcd@gmail.com', '0987654', 'jakarta', 'javascript', 'www.github.com', 'im programmer', '2019-12-07', '2019-12-07', '65', '1575691800197.jpeg', 'programmer');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  `id_engineer` int(11) DEFAULT NULL,
  `id_company` int(11) DEFAULT NULL,
  `done` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `skill`, `description`, `payment`, `id_engineer`, `id_company`, `done`) VALUES
(5, 'Hire backend developer', 'javascript', 'Handle Backend', 7000, NULL, 63, NULL),
(6, 'Hire Frontend developer', 'php', 'Handle Frontend', 8000, NULL, 63, NULL),
(7, 'website pom bensin', 'php', 'backend ', 5000000, NULL, 62, NULL),
(8, 'website sekolah', 'javascript', 'backend Problem solve', 5000000, NULL, 63, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `token`, `status`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1Mzg1MTkwLCJleHAiOjE1NzUzODU3OTB9.UKqqKqshU-JGBQSfiABQH7CYGsattbWLRcjdhEWQ4Xs', 0),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY2F0ZWdvcnkiOm51bGwsImlhdCI6MTU3NTM4NTIwMSwiZXhwIjoxNTc1NDcxNjAxfQ.8u3eAIscVX8igyLcBYexitAuNCoIIcHmdHeUZl_TX8A', 0),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY2F0ZWdvcnkiOm51bGwsImlhdCI6MTU3NTM4NTQ3NywiZXhwIjoxNTc1NDcxODc3fQ.BQqwlToeull2omoo6qFonyJxlpYksqftpyzu9w8mPrI', 0),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTc1Mzg1NzA5LCJleHAiOjE1NzUzODYzMDl9.XXvY23ESZ8lWF8VSzFD7pNWKFEpv_68BhnLyiWjaZjE', 0),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY2F0ZWdvcnkiOm51bGwsImlhdCI6MTU3NTM4NTczMSwiZXhwIjoxNTc1NDcyMTMxfQ.9SrZdL6FnMIa_CIjyllQtkjlRvGz1bXklr-Gc0PNqGU', 0),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY2F0ZWdvcnkiOiIwIiwiaWF0IjoxNTc1Mzg2MTI1LCJleHAiOjE1NzUzODY3MjV9.Gsn6o1VENotv2_IPGI6ETViYb5WerwhwMxxLx5ZBS6w', 0),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTM4NjE3MSwiZXhwIjoxNTc1NDcyNTcxfQ.-kPIZAQj7hZw8KaXsnALgg4AVZmuX3p3xGgtpmxnu74', 0),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiY2F0ZWdvcnkiOiIxIiwiaWF0IjoxNTc1Mzg4ODQyLCJleHAiOjE1NzUzODk0NDJ9.qB7Nqie-JHjZjsPt-UUwOIOjOoRE_IYa5Imxb0rQjZg', 1),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiY2F0ZWdvcnkiOjEsImlhdCI6MTU3NTM4ODg5OSwiZXhwIjoxNTc1NDc1Mjk5fQ.LjIumPq6A_OCtKU_A7-PyV0LPhN0BcKbJhgpdfk8hbE', 1),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiY2F0ZWdvcnkiOiIwIiwiaWF0IjoxNTc1NDMzOTQxLCJleHAiOjE1NzU0MzQ1NDF9.nTYb2yN9oHukR6M85XG1XoXJmL1mmq2gHy-80sPrF7E', 1),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTQzMzk2OSwiZXhwIjoxNTc1NTIwMzY5fQ.wfIcNZjzRgHpZYjSgr1bRiYgdi1htIgSwxmteJezKHg', 0),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTQzNDc0NCwiZXhwIjoxNTc1NTIxMTQ0fQ.RLlKSDRkWZ3J4AhWORQmxtWNmAR0_g3IZv2Voi3TJzs', 0),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiY2F0ZWdvcnkiOiIwIiwiaWF0IjoxNTc1NDM1MDQ3LCJleHAiOjE1NzU0MzU2NDd9.vpVQqhQ-TiaE7mAEvpGGoRVCyEonKVeifgWBe_xTuWw', 1),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTQzNTA1OSwiZXhwIjoxNTc1NTIxNDU5fQ.NE6SeUqAKEpqt3RXa-2gQypEq24GXf5y0g3HlWm5KcY', 0),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiY2F0ZWdvcnkiOiIwIiwiaWF0IjoxNTc1NDM1Mjc1LCJleHAiOjE1NzU0MzU4NzV9.LVrc1IetJXnAuU8d5St2ycc0mryAdwBvfVVWuCAw-rI', 1),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTQzNTI5MywiZXhwIjoxNTc1NTIxNjkzfQ.rXH2rbM8BrLjAeCypwQEejS8_Lix6IAKLXC5qMPR8Q4', 0),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiY2F0ZWdvcnkiOiIwIiwiaWF0IjoxNTc1NDM1NTk1LCJleHAiOjE1NzU0MzYxOTV9.H9JqBSkKUVceqi-2yJSY0dq2m27wT5B5Xy2JjOkh6qI', 1),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTQzNTYxMCwiZXhwIjoxNTc1NTIyMDEwfQ.OMXSJSLMvGm6ZWgZsMXhTz-OxLQ_vf3nk6Qleu3BIQY', 0),
(51, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNTYwOCwiZXhwIjoxNTc1NTI2MjA4fQ.LZGYK1VwZCKMfeGkYlxrJe8_sz8cFe6BtTFb3bPKc9w', 1),
(52, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNTc0MywiZXhwIjoxNTc1NTI2MzQzfQ.wE_8c9HtKetdyuwn3tWQDQ9Y2NmBjrIMr4vf_fHXCB8', 1),
(53, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNTgwMSwiZXhwIjoxNTc1NTI2NDAxfQ.0wmj7z6dMo1nte1VIfAZkxUDNwBWlwRIb2qX52y15zQ', 1),
(54, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNTkyNCwiZXhwIjoxNTc1NTI2NTI0fQ.0rtdakXCugLNpfnKIi0QFKiFaRLdcsgTKDBX7NDHkfE', 1),
(56, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNjM0NywiZXhwIjoxNTc1NTI2OTQ3fQ.ewpLoFC43sNTrABVKmcKVSioXcNhchR89yNdMiOVkTY', 1),
(59, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNzE0MywiZXhwIjoxNTc1NTI3NzQzfQ.IuQJEQZSEsH67Hqr8DB4yO47YOaWQw9meTTJz4lIMrU', 1),
(60, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDAsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyNzM4MywiZXhwIjoxNTc1NTI3OTgzfQ.QfZJgMjBuVk6U-0X1wSii59nJF8Ckr_wTEBDeQC5Leo', 1),
(61, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUyODE1MCwiZXhwIjoxNTc1NTI4NzUwfQ.NvOyaEYfu7g7FxVszkqRbmf83SZoKjATt2YMthbtaW4', 1),
(62, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MjgyMzMsImV4cCI6MTU3NTYxNDYzM30._8o7QfcTTThAk5b7yFleYZ3j8nJ6hTrOLhWTk2lw6_o', 0),
(63, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTUyOTU4MSwiZXhwIjoxNTc1NTMwMTgxfQ.AMNV321Nrjgqa2Snc2EplF1zAqELTt-_EBxZCHtSYy4', 1),
(64, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzE2MjYsImV4cCI6MTU3NTYxODAyNn0.Oy2Z1yo-JzEL-ihVqPW2lp4CIQ-YrieBtPzhFY4vbgk', 0),
(65, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzI1NTAsImV4cCI6MTU3NTYxODk1MH0.teqXqNlTQR6fEho0oWNXyzar2M4lw_cwOm3FB6AnsNE', 0),
(66, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUzMjY4NiwiZXhwIjoxNTc1NTMzMjg2fQ.2alBROKAhaf3XjTL7PH_n7rEejhMNlhD23fN7rb1DsU', 1),
(67, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzI3MzIsImV4cCI6MTU3NTYxOTEzMn0.FeSGoUbRFaxrwSt6jOefQ2WlrSpvI9TyX_ck8SNQV4w', 0),
(68, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzI4NjEsImV4cCI6MTU3NTYxOTI2MX0.6mI_SUB4YNfSBc76qVXsL6BENi9HBvrH64ih1sKoVP4', 0),
(69, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUzMzY2OCwiZXhwIjoxNTc1NTM0MjY4fQ.hjFq1rT0vuzkwy9pGXHUvBS0zA0CZEtLN47rPPyZUww', 1),
(70, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzM3MDgsImV4cCI6MTU3NTYyMDEwOH0.rVaIBAdb9oCQA0YF_WeJLvxtBQaHXadbOzICidAhzYo', 0),
(71, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUzNDAzMiwiZXhwIjoxNTc1NTM0NjMyfQ.7Ql24zD-dNP4M_jX-u6ezcAboIZdVSGhTX2wyZUBROM', 1),
(72, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzQwNTIsImV4cCI6MTU3NTYyMDQ1Mn0.GPOSaGWbREyoG63lkFTsG_QCfO1dmMPGPTO0_5vEtsw', 0),
(73, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUzNDUxMiwiZXhwIjoxNTc1NTM1MTEyfQ.8H6t2N97PZAx3rKwlGkP7ylW_MjS6L7g0tcAgYY-B1U', 1),
(74, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzQ1NDQsImV4cCI6MTU3NTYyMDk0NH0.TbpebA9sLY_apzwU9xDPY4d6QpCj1cYay-n4cNqssis', 0),
(76, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTUzNDgwMSwiZXhwIjoxNTc1NTM1NDAxfQ.JO8uXFhlElA6EEJjObFdEb-C3A1d_4KD0m1DUh1ekYI', 1),
(77, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1MzQ4MzcsImV4cCI6MTU3NTYyMTIzN30.eGvlVMi8h6SII8gO_5ivSivnIan8pckCLs5_Rbe8XOc', 0),
(78, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1NDQxNTksImV4cCI6MTU3NTYzMDU1OX0.6l5yZfCeBLyGc6vut9PRr0CRtEVuqXLLXKywbBMuze4', 0),
(79, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1NDU3NDYsImV4cCI6MTU3NTYzMjE0Nn0.66mGDaRXRBndmzdxCjtU3JXTQGBBffiZkrH2VotT8qI', 0),
(83, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1NTQzODIsImV4cCI6MTU3NTY0MDc4Mn0.LNTMEcbJpWFy9FYqJPJUG_i7mSDRRPJSn88U7kVIZF0', 0),
(84, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1NTg1NDMsImV4cCI6MTU3NTY0NDk0M30.KG7k0WtoiF24F4xh38JNiOaouxf5kC59wZLr9atOflo', 1),
(85, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU1NjMxMTgsImV4cCI6MTU3NTY0OTUxOH0.0oSvoSJUIYUIirLbGA9R5L6opq4NdJa_sMozal_mbZ8', 1),
(86, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MDAyMjgsImV4cCI6MTU3NTY4NjYyOH0.0S65oOddtdGiRyGbhQEM3d2Vup8jRlHRs_Fe5rHa0oo', 1),
(87, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MDI4MDUsImV4cCI6MTU3NTY4OTIwNX0.2MatOKhasODLPhwuL-t6KC8NTn08f4tMl-gX1OCbB58', 0),
(88, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MDMwMzAsImV4cCI6MTU3NTY4OTQzMH0.Bwt_HA3Zld2FHO1haZLjRpTzcR1TOQaGRTY8BPxSv6w', 0),
(89, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MDUyMDksImV4cCI6MTU3NTY5MTYwOX0.QpUA3lHU1T3a5MlOXamUDSopxoa1z6r_6hG37zaGsbU', 0),
(90, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTYwNTQ3MSwiZXhwIjoxNTc1NjkxODcxfQ.j_OeqdqY2amrFqZM6DiRi3dx47dBTEZFs9ertqezwRE', 0),
(91, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTYwNTY0MCwiZXhwIjoxNTc1NjA2MjQwfQ.oXVFzywpI0RIoxbgA7cHf6ObJZpEDyqLKAcwhN_VhKI', 1),
(92, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MDU2OTQsImV4cCI6MTU3NTY5MjA5NH0.iF1KALgtMt6DtdfOzON0j_0CkjC1tK6pSJkxH9KVEhY', 0),
(93, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTYwNTg1NCwiZXhwIjoxNTc1NjA2NDU0fQ.K2RRVEsaaEUzvWtqdGrA1N4MMGfmvdOP1Arjloq_Zss', 1),
(94, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MDU4OTIsImV4cCI6MTU3NTY5MjI5Mn0.44Nj2muJt0TkdkWeV73mDFdb3kp1Bhd73WFsN8w6Y6w', 0),
(95, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTYwNjkzOSwiZXhwIjoxNTc1NjkzMzM5fQ.FLWGcPMiX3MPFEfoZT3TAUc9ImBYcUidATKf5_Qa3ns', 0),
(96, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MTM0MjAsImV4cCI6MTU3NTY5OTgyMH0.bregbYbWt1pY_l06bJ4A-r-2qVXAsBDzHSnSeJAVDaI', 0),
(97, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiY2F0ZWdvcnkiOjAsImlhdCI6MTU3NTYxNDY1NCwiZXhwIjoxNTc1NzAxMDU0fQ.sxumucnXP2O1zi0wfmTsp1E4ZR1W_D9kXGZj0yiFVak', 0),
(98, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTYxNDgzMywiZXhwIjoxNTc1NjE1NDMzfQ.w2KBXBMlwKCmnEaz0vA-IfoZ9RLgEekD_1du6OEsP4w', 1),
(99, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MTQ5MDYsImV4cCI6MTU3NTcwMTMwNn0.dx0cH0I3_iEYYazAq2zbfLECunyTFKrWBZcHn7fuHZw', 0),
(100, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTEsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MTU1NjgsImV4cCI6MTU3NTcwMTk2OH0.Nb-vF4mMw2-1XuIn7MXDZ3ghijiKMLHnQzJQ7EL3M0s', 1),
(101, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MjAwMDcsImV4cCI6MTU3NTcwNjQwN30.fGHD3oMsp9wQQ6RwAMH7Wi9HGq7TccIuMGt_L-hSJlU', 0),
(102, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MjEwNDgsImV4cCI6MTU3NTcwNzQ0OH0.0QQG-Rdx_UnVEdn227snhbqv2OtnOs3sxdvi4afc8mY', 1),
(103, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTYyNjU0MiwiZXhwIjoxNTc1NjI3MTQyfQ.JPumWXuQZj-ltcB8KBPF5fVMLm5rulKG27tYsaJFkLg', 1),
(104, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTMsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTYyNjU4MCwiZXhwIjoxNTc1NjI3MTgwfQ.tG5lvlQ8LeNgQ9xAQrkUy3jb7BqFOvRdoJH6MJE75vs', 0),
(105, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2Mjg3NjIsImV4cCI6MTU3NTcxNTE2Mn0.NNJepyqI1euspVSCQ-OmkTDtVcmPSTbi01xqKkzybL4', 1),
(106, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2MzcyNjUsImV4cCI6MTU3NTcyMzY2NX0.50ICIT-FeVvGFjp1zB_ctcCGTs4095Vmfr2Splm170M', 1),
(107, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2Mzg2NzQsImV4cCI6MTU3NTcyNTA3NH0.eXSXZ7iLYW6DND8R1NpVndTg-g987e4E795jNgFK0Oo', 1),
(108, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY0MjQ3MCwiZXhwIjoxNTc1NjQzMDcwfQ.v7K2cpj1MbqikUNRsB-mPKuEHfp4Bpd0nTn2tseNtUo', 1),
(109, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY0MjYzMSwiZXhwIjoxNTc1NjQzMjMxfQ.UlA7hZVx7DkVNrBAZ_WO73LsFm6F4Z8MdWvTA7vNlZI', 1),
(110, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTYsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTY0MjY0OSwiZXhwIjoxNTc1NjQzMjQ5fQ.o8eNRiO4Q_-XZ-gyjViOIS9M3TB5XKUZKfOWuDn4yNg', 1),
(111, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY0Mjc5MywiZXhwIjoxNTc1NjQzMzkzfQ.FKdKL7eGjNaTyB09NDZw3Wy56MX0IOX2l2_0BG7NxPc', 1),
(112, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTY0Mjg4MSwiZXhwIjoxNTc1NjQzNDgxfQ.1_fHw5HjjlOWGqmCZlyv0Te1pYmxnTDpw-VbTJboLJY', 1),
(113, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2NDI5MjEsImV4cCI6MTU3NTcyOTMyMX0.yTSVKBoAVYCMd9OOKZ5T7xnEYorQlDtyqDQ0Yfbu8CE', 0),
(114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTksImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY0NTIwOSwiZXhwIjoxNTc1NjQ1ODA5fQ.32U6YeTjElyciU41qqNzsGjvHW5h1alHTPWm6wGBknI', 1),
(115, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY0NTU1MSwiZXhwIjoxNTc1NjQ2MTUxfQ.yONNoinnjfAvu64W-8aZOD2IwUqtvbWd9T4m3H9w0hU', 1),
(116, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY0NjU4MSwiZXhwIjoxNTc1NjQ3MTgxfQ.vlPsZWPHokEdIYujfGcdejKdcZMfQffKLjekpmOFuC0', 1),
(117, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2NDc4MzMsImV4cCI6MTU3NTczNDIzM30.tAHfJZdbN-KJKoG_gsM6pfK1pGwlbbC7us86thfnsf4', 1),
(118, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2NTExNTcsImV4cCI6MTU3NTczNzU1N30.goK2I5bEN7OCBDNnfUwV_qNIMtHrV7qYc_0vM8TgfH0', 1),
(119, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2NTIwNTMsImV4cCI6MTU3NTczODQ1M30.PenwA4RF5FNbcE5acTtJIfONkvQxh5Tvkujok5zusdA', 1),
(120, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY1Mjk0NiwiZXhwIjoxNTc1NjUzNTQ2fQ.YtC9zwQG4gWCyJS0_cbqMKF6Kt_ihveQEyBumdK0pP4', 1),
(121, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2NTMwNzgsImV4cCI6MTU3NTczOTQ3OH0.1-se2a18ARJuVxu6FO5S-kXCGM0DaSgvA2FdHJRqXtE', 0),
(122, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImNhdGVnb3J5IjoiMSIsImlhdCI6MTU3NTY1MzEwOCwiZXhwIjoxNTc1NjUzNzA4fQ.jyB2Ew0DTumVn1BeWpZW32AmoDoOuoe9-DTCMfzqKbw', 1),
(123, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2NTMzNzAsImV4cCI6MTU3NTczOTc3MH0.IL2IjdQ_Oem2H3JToFWQMa64te8SwVKO7zYnX9PTFbc', 0),
(124, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2NTY0NDUsImV4cCI6MTU3NTc0Mjg0NX0.QbsSeabq5GO50MVHZN6xjlIzEohGhyIxWynMJF4ovI0', 0),
(125, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2NTY3MTAsImV4cCI6MTU3NTc0MzExMH0.QXkxLBYg81ElV0Lk5uARATAQLqvzM0PE_V1v5xRMLds', 0),
(126, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2NTY3NjIsImV4cCI6MTU3NTc0MzE2Mn0.f472zqe19qRmiXhV7_eBkNOOnNGN8Na_QpX-2TVObp0', 0),
(127, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2NTY4MTEsImV4cCI6MTU3NTc0MzIxMX0.9bH3mOUgoguTVu-mij9JJSSb02bhzYv4LoINGAlrnOo', 0),
(128, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2NTcwMzIsImV4cCI6MTU3NTc0MzQzMn0.gCwuhNMiCCzg-PhNDxtw2wEJ7TN2FMu7T72EVEcLYwg', 0),
(129, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2Nzc0NDAsImV4cCI6MTU3NTc2Mzg0MH0.myJlJFQFL8EhSLVb3joF9ILqm9qSRZgfxgFp6mLIk5I', 0),
(130, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2Nzc2MDIsImV4cCI6MTU3NTc2NDAwMn0.RxoA_QJhmfpNpRBk4nclH1OxdXNXCGi0whPHBxlcPUs', 1),
(131, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2ODMyNjksImV4cCI6MTU3NTc2OTY2OX0.LMireE-zn72VLv91dbRkwKCX5NSlaxz7vAjZARe6rEk', 1),
(132, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2ODM3NTgsImV4cCI6MTU3NTc3MDE1OH0.mKE6Edj4xSX4MHdMOaZP52m88VcLG7aWWof4mOQHm6c', 1),
(133, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2ODQwMjAsImV4cCI6MTU3NTc3MDQyMH0.q3PmFR2216oIh-QuVxC_S42lDj56z2fF3BCD-C_zTS4', 1),
(134, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2ODQxMzQsImV4cCI6MTU3NTc3MDUzNH0.-X-7mEtT5ziOCbB-qQ1m0Q3quPWMm-xtX57svEYIto0', 1),
(135, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2ODQzNjEsImV4cCI6MTU3NTc3MDc2MX0.EmbSxtk98tDb0Jg6HteK4e1qfSFuJcQWVtfKXUgAqg8', 1),
(136, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2ODQ0NjIsImV4cCI6MTU3NTc3MDg2Mn0.Keib6iw6u-1t1jwpHxieuxeZm20tmXQiWTZba-6bO-s', 0),
(137, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImNhdGVnb3J5IjoiMCIsImlhdCI6MTU3NTY5MTYxMSwiZXhwIjoxNTc1NjkyMjExfQ.UpKziQtjxN8-4Bm7V_eYXdVCjm92QJ4BPzpYLryPpqI', 1),
(138, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU2OTE2OTQsImV4cCI6MTU3NTc3ODA5NH0.ZSjgRIst5rSlf2m3StzfeyLtXLhE3Fpy_Z02ozWYHnc', 0),
(139, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2OTE4NTYsImV4cCI6MTU3NTc3ODI1Nn0.CB-0fwyYZOXnLElG1wKZv4ZDDoBFuaDm_l8OQkPqlOE', 1),
(140, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU2OTIyNjIsImV4cCI6MTU3NTc3ODY2Mn0.OVdRIklCpd3RYi9x-8DNJRHsXO9s3jSImrIxirWhE-g', 1),
(141, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU3MzU5NjEsImV4cCI6MTU3NTgyMjM2MX0.f30Ca8nKrrfO4Oy5nfdYI2GDHw-Y6fPj3BQsa0Xtbk0', 1),
(142, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU3Mzc1MjYsImV4cCI6MTU3NTgyMzkyNn0.ZEXeK2nTqNgWuS0SZ3slRUwvdyGWHDlqM1GeCiZszDI', 1),
(143, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU3Nzc3MTQsImV4cCI6MTU3NTg2NDExNH0.ZOfTEdlp1YhnUOo_e8vqKLJlgq1cvCsXEe0dBGHEE3E', 1),
(144, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU3Nzk3NDAsImV4cCI6MTU3NTg2NjE0MH0.gm0eGZFSS95qnsYpKjjdM2ORUeH_WUYw_6xPI_NUdM0', 0),
(145, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU3ODU0NjEsImV4cCI6MTU3NTg3MTg2MX0.AixgUXAVj-_g1pzJWtB45RIpQOTFRsHt0t86y_L7WvY', 0),
(146, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU3OTQxNDksImV4cCI6MTU3NTg4MDU0OX0.5sZUzn4CUhn0G2yz4aYkMeT0nC-PVk6DqN4Boi_u6bo', 0),
(147, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDAwMjIsImV4cCI6MTU3NTg4NjQyMn0.xNdeWEcXehmPJ17aJVt5pw11QJUQwCE90u7ZlYIPDzk', 0),
(149, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDQwNDUsImV4cCI6MTU3NTg5MDQ0NX0.z8AWkBygHmIvgZum0UxgsegUXgDiUn3O4qtqjoldVqU', 0),
(150, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDQ2ODgsImV4cCI6MTU3NTg5MTA4OH0.oBW2n7npww3eRTOgpRonbCzgiyZ79HRyrN4PYbBvM4s', 0),
(151, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDU2MzIsImV4cCI6MTU3NTg5MjAzMn0.STbrRgc2kYxBviofKltaIcf9dILIKUkgSyyFOlnsX7Q', 1),
(152, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDYzODYsImV4cCI6MTU3NTg5Mjc4Nn0.NAIJVGiDh9NDkT6ydlS3_qhKgO_B7A2JqbgiFcw-TXo', 1),
(153, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDgwMDMsImV4cCI6MTU3NTg5NDQwM30.3sHqNxDsZ4CsFymQ0lsFvCepGZRGY47C2mgVnmuCiKU', 1),
(155, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImNhdGVnb3J5IjowLCJpYXQiOjE1NzU4MDk0MDQsImV4cCI6MTU3NTg5NTgwNH0.-HoQyLAz08aY5hcZ7I24_li40xePpQScsLU_DQ-4mCs', 0),
(156, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU4MTAwNzksImV4cCI6MTU3NTg5NjQ3OX0.zp_mvDgDRCYlkpD2tEws4N0-EeZAqrYCKR56u1dPX7Y', 0),
(157, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU4MTE5NTMsImV4cCI6MTU3NTg5ODM1M30.cBnTYb9B4yLTqpRm4Ad-CSyITLhvovJoDngx80kpJa8', 0),
(158, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImNhdGVnb3J5IjoxLCJpYXQiOjE1NzU4MTIyOTQsImV4cCI6MTU3NTg5ODY5NH0.cUaV43s8CrPM0ZzwLDKyjf7JsJ4qkWTg5jQlBKVPWgI', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(80) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `category`, `status`) VALUES
(3, 'mfadelprt', '12345', 0, NULL),
(5, 'pt.rajawali', '12345', 1, NULL),
(6, 'teguh', '12345', 0, NULL),
(7, 'anggi', '12345', 0, NULL),
(8, 'marshanda', '12345', 0, NULL),
(9, 'somi', '12345', 0, NULL),
(10, 'Yusuf', '12345', 0, NULL),
(11, 'edo', '12345', 0, NULL),
(12, 'ebi', '12345', 0, NULL),
(13, 'bobi', '12345', 0, NULL),
(16, 'rido', '12345', 0, NULL),
(20, 'bobi1', '12345', 0, NULL),
(42, 'ptok', '12345', 1, NULL),
(47, 'jokowi', '12345', 0, NULL),
(49, 'roni', '12345', 0, NULL),
(58, 'mulyadi', '12345', 0, NULL),
(60, 'ptk', '1234', 1, NULL),
(61, 'pertamina', '12345', 1, NULL),
(62, 'pertmini', '12345', 1, NULL),
(63, 'arkademi', '12345', 1, NULL),
(65, 'edo12', '12345', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `engineers`
--
ALTER TABLE `engineers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `engineers`
--
ALTER TABLE `engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
