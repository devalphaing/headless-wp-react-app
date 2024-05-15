import axios from 'axios';
import config from '../config.json';

const getPageContent = async (slug) => {
    let response = {};
    try{
        const url = config['base-url'];
        const apiCallResponse = await axios.get(`${url}/pages?slug=${slug}`);
        response = {
            success: true,
            message: 'data fetched successfully',
            data: apiCallResponse.data
        }
    }catch(err) {
        response = {
            success: false,
            message: err,
            data: null
        }
    }
    return response;
}

const getPosts = async () => {
    let response = {};
    try{
        const url = config['base-url'];
        const apiCallResponse = await axios.get(`${url}/posts`);
        response = {
            success: true,
            message: 'data fetched successfully',
            data: apiCallResponse.data
        }
    }catch(err) {
        response = {
            success: false,
            message: err,
            data: null
        }
    }
    return response;
}

export {getPageContent, getPosts};