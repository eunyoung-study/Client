import React from "react";
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";

const MyPosts = ({ postSerivce }) => {
    const { userid } = useParams();
    return <Posts postSerivce={postSerivce} userid={userid} addable={false} />;
};

export default MyPosts;
