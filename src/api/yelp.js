import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GYymiaTDn_pyVQr-O5F_U5IbiMpQzs4P6ExdIxGo3oLBiEG-R_KFL_yAU4mm3Mk4jxwy5j35JL51pk4sX0hp6_R2Heb-8o3FNEgt82EBC9N3HquGTnWKJCPh2lcGYXYx'
    }
});

