-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 13 Février 2023 à 13:37
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `bdnote`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE IF NOT EXISTS `etudiant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NumInscription` varchar(12) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(200) NOT NULL,
  `Adresse` varchar(50) NOT NULL,
  `Formation` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Contact` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=208 ;

--
-- Contenu de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `NumInscription`, `Nom`, `Prenom`, `Adresse`, `Formation`, `Email`, `Contact`) VALUES
(206, '201032254789', 'RAKOTOMANANA', 'RASOA', 'Antanambao 2', 'Informatique avancée', 'rakoto@gmail.com', '0324875963'),
(207, '201302050266', 'RANAIVOJAONA', 'Faniry', 'Ampopoka', 'Cours de Langue', 'ranaivojaona20@gmail.com', '0324077188');

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE IF NOT EXISTS `matiere` (
  `CodeMatiere` varchar(50) NOT NULL,
  `Designation` varchar(50) NOT NULL,
  PRIMARY KEY (`CodeMatiere`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `matiere`
--

INSERT INTO `matiere` (`CodeMatiere`, `Designation`) VALUES
('M002', 'Cours de Langues'),
('M003', 'Informatique avancée'),
('M004', 'Apprentisage du métier'),
('M005', 'Informatique bureautique');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `NumInscription` varchar(10) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(200) NOT NULL,
  `Adresse` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=281 ;

--
-- Contenu de la table `message`
--

INSERT INTO `message` (`id`, `NumInscription`, `Nom`, `Prenom`, `Adresse`, `Email`) VALUES
(278, '0342883869', 'Soa', 'Mba mangataka numeron''ny Mr le député', 'Demande', 'soa@gmail.com'),
(280, '0342001666', 'RANAIVOJAONA', 'Demande de stage', 'Demande', 'ranaivojaona20@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(13, 'RANAIVOJAONA', 'ranaivojaona20@gmail.com', '$2a$08$wDSqbK6H03VoZM3JK33q/.giahEz9t2CkTk9ybNiI4SRpSKGx.8eq'),
(14, 'Nantenaina', 'zayan@gmail.com', '$2a$08$5bhHuym2t87L2g2wmzGz4eYj6RSY/vMERJi5UhRGnNhSRxIFedhFa'),
(15, '', '', '$2a$08$j4brYfSNOzXrAWk7jGO1ve12tBizVzzzEjKMd8fzywTLj/zs0CBMu');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
