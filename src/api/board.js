//import { apiInstance } from "./index.js";
//const api = apiInstance();
import {api} from "./index.js";

// category별 게시글을 받아온다.
async function get_boardList(category, success, fail) {
  await api.get(`/posts?category=${category}`).then(success).catch(fail);
}

// 단일 게시글 조회
async function get_board(posNo, success, fail) {
  await api
    .get(`/post?posNo=${posNo}`).then(success).catch(fail);
}

// 게시글 추가
async function regist_board(boardInfo, success, fail) {
  await api.post(`/post`, JSON.stringify(boardInfo)).then(success).catch(fail);
}

// 게시글 수정
async function modify_board(boardInfo, success, fail) {
  await api.put(`/post`, JSON.stringify(boardInfo)).then(success).catch(fail);
}

// 게시글 삭제
async function delete_board(posNo, success, fail) {
  await api.delete(`/post?posNo=${posNo}`).then(success).catch(fail);
}

// 게시글 신고
async function regist_board_report(posNo, reportInfo, success, fail) {
  await api.post(`/post/report?posNo=${posNo}`, JSON.stringify(reportInfo)).then(success).catch(fail);
}

// 게시글 좋아요
async function get_board_like(posNo, success, fail) {
  await api.get(`/post/like?posNo=${posNo}`).then(success).catch(fail);
}

// 게시글 좋아요 취소
async function delete_board_like(posNo, success, fail) {
  await api.delete(`/post/like?posNo=${posNo}`).then(success).catch(fail);
}

// 게시글 스크랩
async function get_board_scrap(posNo, success, fail) {
  await api.get(`/post/scrap?posNo=${posNo}`).then(success).catch(fail);
}

// 게시글 스크랩 취소
async function delete_board_scrap(posNo, success, fail) {
  await api.delete(`/post/scrap?posNo=${posNo}`).then(success).catch(fail);
}


// 댓글 목록
async function get_comments(posNo, success, fail) {
  await api
    .get(`/commnets?posNo=${posNo}`).then(success).catch(fail);
}

// 댓글 추가
async function regist_comment(commentInfo, success, fail) {
  await api
    .post(`/comment`, JSON.stringify(commentInfo))
    .then(success)
    .catch(fail);
}

// 댓글 수정
async function modify_comment(commentInfo, success, fail) {
  await api
    .put(`/comment`, JSON.stringify(commentInfo))
    .then(success)
    .catch(fail);
}

// 댓글 삭제
async function delete_comment(comNo, success, fail) {
  await api.delete(`/comment?comNo=${comNo}`).then(success).catch(fail);
}

export {
  get_boardList,
  get_board,
  regist_board,
  modify_board,
  delete_board,
  regist_board_report,
  get_board_like,
  delete_board_like,
  get_board_scrap,
  delete_board_scrap,
  get_comments,
  regist_comment,
  modify_comment,
  delete_comment,
};
