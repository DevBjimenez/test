import React from 'react';
import {Post, usePost} from "../../hooks/usePost";
import {PostList} from "../../components/PostList";
import './PostPage.css'
import {PostItem} from "../../components/PostItem";

const PostPage = () => {
    const {posts, onFavoritePost} = usePost();

    const isFavorite = (itemToFind: Post): boolean => {
        const exist = posts.favorites.findIndex(item => itemToFind.id === item.id)
        return exist >= 0;
    }

    return (
        <div className="PostPage">
            <PostList
                posts={posts.originals}
                render={(item) => (
                    <PostItem
                        isFavorite={isFavorite(item)}
                        key={item.id}
                        onFavorite={() => onFavoritePost(item)}
                        type="ORIGINAL"
                        {...item}
                    />
                )}
            />
            <PostList
                type="FAVORITES"
                posts={posts.favorites}
                render={(item) => (
                    <PostItem
                        key={item.id}
                        type="FAVORITE"
                        {...item}
                    />
                )}
            />
        </div>
    );
};

export {PostPage};
