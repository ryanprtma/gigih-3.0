import { RandomPlaylists } from '../components/RandomPlaylists';
import { PlaylistsRecommendations } from '../components/PlaylistsRecommendation';

export default function HomePage() {
    const playlists = [
        {
            playlistName: 'Juicy Luicy',
            imageUrl: 'ab6761610000e5eb9c51cf91d72671bdd4817f5a.jpeg',
            color: '#194d5b'
        },
        {
            playlistName: 'Top Songs - Indonesia',
            imageUrl: 'region_id_default.jpg',
            color: 'hsl(324.52deg 86.92% 58.04%)'
        },
        {
            playlistName: 'Chill Mix',
            imageUrl: 'default (1).jpeg',
            color: '#d0c7c5'
        },
        {
            playlistName: 'Moody Mix',
            imageUrl: 'default.jpeg',
            color: '#07326c'
        },
        {
            playlistName: 'Yura Yunita',
            imageUrl: 'ab6761610000e5ebc6b4cc16a247c71c2bfc475f.jpeg',
            color: '#8da37e'
        },
        {
            playlistName: 'ColdPlay',
            imageUrl: 'ab6761610000e5eb989ed05e1f0570cc4726c2d3.jpeg',
            color: '#bb9bfa'
        }
    ];

    return (
        <>
            <RandomPlaylists data={playlists} />
            <PlaylistsRecommendations />
        </>
    );
}