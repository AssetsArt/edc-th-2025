import { writable } from "svelte/store";

export const Lineups = writable([
  // Day 1
  {
    date: '2025-01-17',
    stage: 'Kinetic Field',
    performances: [
      { artist: 'ALY$HIA', start_time: '15:00', end_time: '15:45' },
      { artist: 'Kikie', start_time: '15:45', end_time: '16:30' },
      { artist: 'Botcash', start_time: '16:30', end_time: '17:30' },
      { artist: 'Karty', start_time: '17:30', end_time: '18:30' },
      { artist: 'Kaaze', start_time: '18:30', end_time: '19:30' },
      { artist: 'Nicky Romero', start_time: '19:30', end_time: '20:30' },
      { artist: 'Afrojack', start_time: '20:30', end_time: '21:30' },
      { artist: 'Fisher', start_time: '21:30', end_time: '22:40' },
      { artist: 'Tiësto', start_time: '22:45', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-17',
    stage: 'Circuit Grounds',
    performances: [
      { artist: 'Max', start_time: '15:00', end_time: '15:45' },
      { artist: 'Mode', start_time: '15:45', end_time: '16:30' },
      { artist: 'Level Up', start_time: '16:30', end_time: '17:30' },
      { artist: 'SAYMYNAME', start_time: '17:30', end_time: '18:30' },
      { artist: 'Wooli', start_time: '18:30', end_time: '19:45' },
      { artist: 'Black Tiger Sex Machine', start_time: '19:50', end_time: '21:10' },
      { artist: 'Crankdat', start_time: '21:15', end_time: '22:30' },
      { artist: 'Subtronics', start_time: '22:30', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-17',
    stage: 'Stereo Bloom',
    performances: [
      { artist: 'Ayrton L', start_time: '15:00', end_time: '16:00' },
      { artist: 'Leafe', start_time: '16:00', end_time: '17:00' },
      { artist: 'Angus', start_time: '17:00', end_time: '18:00' },
      { artist: 'Mandy', start_time: '18:00', end_time: '19:00' },
      { artist: 'Wildstylez', start_time: '19:00', end_time: '20:00' },
      { artist: 'Rooler', start_time: '20:00', end_time: '21:00' },
      { artist: 'Coone', start_time: '21:00', end_time: '22:00' },
      { artist: 'Da Tweekaz', start_time: '22:00', end_time: '23:00' },
      { artist: 'Mish', start_time: '23:00', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-17',
    stage: 'Bionic Jungle',
    performances: [
      { artist: 'Lucaz', start_time: '15:00', end_time: '16:30' },
      { artist: 'Heidi Lawden', start_time: '16:30', end_time: '17:45' },
      { artist: 'Cole Knight', start_time: '17:45', end_time: '19:00' },
      { artist: 'Beltran', start_time: '19:00', end_time: '20:30' },
      { artist: 'Solardo', start_time: '20:30', end_time: '21:45' },
      { artist: 'Luude', start_time: '21:45', end_time: '22:45' },
      { artist: 'Fish56Octagon', start_time: '22:45', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-17',
    stage: 'Boombox Art Car',
    performances: [
      { artist: 'Bohra', start_time: '15:00', end_time: '16:30' },
      { artist: 'Tiffany', start_time: '16:30', end_time: '18:00' },
      { artist: 'Tom William', start_time: '18:00', end_time: '19:30' },
      { artist: 'l33', start_time: '19:30', end_time: '21:00' },
      { artist: 'MIA Q', start_time: '21:00', end_time: '22:30' },
      { artist: 'AJOHN', start_time: '22:30', end_time: '00:00' }
    ]
  },
  // Day 2
  {
    date: '2025-01-18',
    stage: 'Kinetic Field',
    performances: [
      { artist: 'Shawty P', start_time: '15:00', end_time: '16:00' },
      { artist: 'Junior', start_time: '16:00', end_time: '17:15' },
      { artist: 'PIXZY', start_time: '17:15', end_time: '18:15' },
      { artist: 'Hamdi', start_time: '18:15', end_time: '19:15' },
      { artist: 'Showtek', start_time: '19:15', end_time: '20:15' },
      { artist: 'Meduza', start_time: '20:15', end_time: '21:30' },
      { artist: 'Chris Lake B2B Sammy Virji', start_time: '21:30', end_time: '22:45' },
      { artist: 'Skrillex', start_time: '22:45', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-18',
    stage: 'Circuit Grounds',
    performances: [
      { artist: 'DJ 8asara', start_time: '15:00', end_time: '16:00' },
      { artist: 'YUKIO', start_time: '16:00', end_time: '17:00' },
      { artist: 'Nifra', start_time: '17:00', end_time: '18:00' },
      { artist: 'Billy Gillies', start_time: '18:00', end_time: '19:00' },
      { artist: 'Giuseppe Ottaviani', start_time: '19:00', end_time: '20:15' },
      { artist: 'Cosmic Gate', start_time: '20:15', end_time: '21:30' },
      { artist: 'Vini Vici', start_time: '21:30', end_time: '22:45' },
      { artist: 'MaRLo', start_time: '22:45', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-18',
    stage: 'Stereo Bloom',
    performances: [
      { artist: 'Baggi', start_time: '15:00', end_time: '15:45' },
      { artist: 'Yuuki Yoshiyama', start_time: '15:45', end_time: '16:30' },
      { artist: 'Ahadadream', start_time: '16:30', end_time: '17:45' },
      {
        artist: 'Indo Warehouse (Kahani vs. Kunal Merchant)',
        start_time: '17:45',
        end_time: '19:00'
      },
      { artist: 'TOKiMONSTA', start_time: '19:00', end_time: '20:15' },
      { artist: 'HUGEL', start_time: '20:15', end_time: '21:30' },
      { artist: 'Gordo', start_time: '21:30', end_time: '22:45' },
      { artist: 'SIDEPIECE', start_time: '22:45', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-18',
    stage: 'Bionic Jungle',
    performances: [
      { artist: 'Mr. Sour', start_time: '15:00', end_time: '16:30' },
      { artist: 'Loods', start_time: '16:30', end_time: '18:00' },
      { artist: 'MALUGI', start_time: '18:00', end_time: '19:30' },
      { artist: 'DJ Heartstring', start_time: '19:30', end_time: '21:00' },
      { artist: 'AK Sports', start_time: '21:00', end_time: '22:30' },
      { artist: 'Hiroko Yamamura', start_time: '22:30', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-18',
    stage: 'Boombox Art Car',
    performances: [
      { artist: 'Amp Killa', start_time: '15:00', end_time: '16:30' },
      { artist: 'James Jay', start_time: '16:30', end_time: '18:00' },
      { artist: 'Renato S', start_time: '18:00', end_time: '19:30' },
      { artist: 'Honey Gee', start_time: '19:30', end_time: '21:00' },
      { artist: 'Milky', start_time: '21:00', end_time: '22:00' },
      { artist: 'Lazyprince', start_time: '22:00', end_time: '23:00' },
      { artist: 'Jim B2B K.D.B', start_time: '23:00', end_time: '00:00' }
    ]
  },
  // Day 3
  {
    date: '2025-01-19',
    stage: 'Kinetic Field',
    performances: [
      { artist: 'Kay', start_time: '15:00', end_time: '16:00' },
      { artist: 'Lynne', start_time: '16:00', end_time: '17:10' },
      { artist: 'Joy Lila B2B Riviere with PRADAA', start_time: '17:10', end_time: '18:10' },
      { artist: '22Bullets x MarvinZ1R', start_time: '18:10', end_time: '19:10' },
      { artist: 'R3HAB', start_time: '19:10', end_time: '20:10' },
      { artist: 'Yellow Claw', start_time: '20:10', end_time: '21:20' },
      { artist: 'Illenium', start_time: '21:22', end_time: '22:35' },
      { artist: 'The Chainsmokers', start_time: '22:35', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-19',
    stage: 'Circuit Grounds',
    performances: [
      { artist: 'Jai Jetpack', start_time: '15:00', end_time: '15:55' },
      { artist: 'Corsak', start_time: '15:55', end_time: '16:55' },
      { artist: 'Wukong', start_time: '16:55', end_time: '17:55' },
      { artist: 'ARMNHMR', start_time: '17:55', end_time: '18:55' },
      { artist: 'Deorro', start_time: '18:55', end_time: '20:10' },
      { artist: 'Dabin', start_time: '20:15', end_time: '21:30' },
      { artist: 'Dimension', start_time: '21:30', end_time: '22:55' },
      { artist: 'Rezz', start_time: '23:00', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-19',
    stage: 'Stereo Bloom',
    performances: [
      { artist: 'Smile', start_time: '15:00', end_time: '15:45' },
      { artist: 'YAAT B2B iLTIK', start_time: '15:45', end_time: '16:30' },
      { artist: 'Youna', start_time: '16:30', end_time: '17:45' },
      { artist: 'ØTTA', start_time: '17:45', end_time: '19:00' },
      { artist: 'Eli Brown', start_time: '19:00', end_time: '20:15' },
      { artist: 'Nico Moreno', start_time: '20:15', end_time: '21:30' },
      { artist: 'Alignment', start_time: '21:30', end_time: '22:45' },
      { artist: '999999999', start_time: '22:45', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-19',
    stage: 'Bionic Jungle',
    performances: [
      { artist: 'Eli Cicada', start_time: '15:00', end_time: '16:30' },
      { artist: 'HoneyLuv', start_time: '16:30', end_time: '18:00' },
      { artist: 'AMÉMÉ', start_time: '18:00', end_time: '19:30' },
      { artist: 'Mita Gami', start_time: '19:30', end_time: '21:00' },
      { artist: 'LP Giobbi', start_time: '21:00', end_time: '22:30' },
      { artist: 'Gorgon City', start_time: '22:30', end_time: '00:00' }
    ]
  },
  {
    date: '2025-01-19',
    stage: 'Boombox Art Car',
    performances: [
      { artist: 'Lisitsyn', start_time: '15:00', end_time: '16:30' },
      { artist: 'Mordan', start_time: '16:30', end_time: '18:00' },
      { artist: 'Felipe Zona', start_time: '18:00', end_time: '19:30' },
      { artist: 'Ryu', start_time: '19:30', end_time: '21:00' },
      { artist: 'Amily', start_time: '21:00', end_time: '22:30' },
      { artist: 'Sunrise X Grozzman', start_time: '22:30', end_time: '00:00' }
    ]
  }
]);