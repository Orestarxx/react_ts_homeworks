import React, {FC} from 'react';
import {IComment} from "../../../models/IComment";

type CommentProps = {
    comment: IComment
}
const Comment: FC<CommentProps> = ({comment: {name, id}}) => {
    return (
        <div>
            <div>{id}_{name}</div>

        </div>
    );
};

export default Comment;