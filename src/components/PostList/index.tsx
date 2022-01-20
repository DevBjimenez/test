import React from 'react';
import {Post} from "../../hooks/usePost";
import {Box} from "@mui/material";

export interface IPostList {
    render: (item: Post) => void;
    posts: Array<Post>,
    type?: 'FAVORITES' | 'ORIGINALS'
}

const PostList = ({render, posts, type}: IPostList) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '50%',
            gap: '20px',
            '& > :not(style)': {
                m: 1,
                width: 250,
                height: 250,
                overflow: 'auto'
            },
        }}>
            {
                posts.map(render)
            }
        </Box>
    );
};

export {PostList};
