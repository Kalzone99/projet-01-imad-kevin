// Déclaration de l'API Read Access Token
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGVhMWIwZjYwNTNmM2NiYmM4MTY2MDExMjFlM2IzNCIsIm5iZiI6MTczMTA4MTg2Ny4xMjE5OTQzLCJzdWIiOiI2NzI4YzhmMDU5MTgxMzdjZmMzOWJkMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TjJX15tHCdG_gjk4OD8cHfj10KoCO_nIq1TJ_XjEtBM";

// URL de base pour TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

// En-têtes pour l'authentification
const headers = {
    'Authorization': `Bearer ${API_TOKEN}`, // Utilise le token là
    
};