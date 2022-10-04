import React from 'react'

function CenterItemReactions({currentlyPlaying, setCurrentlyPlaying}){

    const commentListItems = currentlyPlaying.comments.map(comment => (
        <li>
            <p>{comment.content}</p>
            <span className="commenter-name">{comment.commenterName || 'unknown'}</span>            
        </li>
    ))

    return (
        <>
            <div id="reactions">
                <div className="reactions-details">
                    <ul id="comment-list">{commentListItems}</ul>
                </div>
            </div>
            <div className="reactions-summary">
                <div id="comment-count">
                    <p><span className="count">{currentlyPlaying.comments.length}</span> comments</p>
                </div>
                <p id="like-count"><span className="count">{currentlyPlaying.likes}</span> likes</p>
            </div>
            
            <form id="add-comment-form">
                <textarea cols="30" rows="10" placeholder="add comment"></textarea>
                <input type="submit" className="btn" value="submit" />
            </form>        
        </>        
    )
}

export default CenterItemReactions