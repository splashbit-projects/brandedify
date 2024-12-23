"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link className="postcard" href={`/resources/${post.slug}`}>
      <Image
        alt={post.title}
        src={`/images/resources/${post.thumbnail}`}
        width={590}
        height={300}
      />
      <div className="info">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="more" href="#">
          Read more
          <img src="/images/resources/arrow-right.svg" />
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
