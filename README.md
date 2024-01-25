# flody

## 소개

저희 팀은 **취준생을 위한 스터디 SNS**를 만들 것입니다.

## 구성

이 명세서는 다음 순서로 구성되어 있습니다.

1. 목표
2. 주요 기능
3. 화면 구성

## 목표

1. **시각적/게임적 요소**를 통해 공부 기록과 성과에 성취감을 느낄 수 있는 서비스
2. 개인 목표에 따른 다양한 **정보를 제공**받을 수 있는 서비스

## 주요 기능

### 1. 뉴스피드

* 유저 개인 스터디 기록을 게시하는 **사진 중심 게시판**입니다.
* 게시글 등록 시, 스터디 인증 사진, 텍스트, 해시태그, 목표 시험의 종류와 응시 예정일을 선택적으로 등록할 수 있습니다.
* 게시물 등록 시, 공개 범위를 설정할 수 있습니다.
  * 전체 공개 (이하 최상위 수준 공개 범위)
  * 스터디 공개
  * 팔로워 공개
  * 비공개 (이하 최하위 수준 공개 범위)

### 2. 게시판

* 유저 합격 인증, 스터디 기록, 스터디 모집 공고 등을 게시할 수 있는 **텍스트 중심 게시판**입니다.
* 합격 인증글 등록 시, 합격 여부를 인증해야 게시글이 정상 등록됩니다.
  * 합격 인증 방식에 대한 기술적 논의가 필요합니다.
* 스터디 기록글 등록 시, 시험 종류와 공부 기간를 필수 작성해야 게시글이 정상 등록됩니다.
* 스터디 모집 공고글 등록 시, 목표 시험 종류와 응시일을 필수 작성해야 게시글이 정상 등록되며, 게시글 내에는 ‘스터디 등록 요청 링크’를 자동으로 생성합니다.

### 3. 스터디룸

* 그룹 스터디원 간 정보 및 기록, 계획 등을 공유할 수 있는 **미니 홈페이지**입니다.
* 스터디룸은 게시판에서 ‘스터디 모집 공고글’을 등록할 때, 자동 생성됩니다.
* 스터디룸의 생성자는 홈페이지의 최초 소유자가 됩니다.
* 스터디룸은 목표 시험, 응시일, 그룹 스케줄, 구성원 리스트, 구성원 게시물, 공지사항, 공유 정보로 구성됩니다.
* 스터디룸의 소유자는 구성원을 초대, 등록, 제외, 차단할 수 있습니다.
* 스터디룸의 소유자는 홈페이지를 삭제할 수 있습니다.
* 스터디룸의 소유자는 구성원에게 권한을 양도할 수 있습니다.
* 스터디룸 수정 권한자는 홈페이지 구성 요소의 내용과 공개 범위를 모두 수정할 수 있는 권한을 갖습니다.
* 스터디룸 구성원은 스터디룸 구성 요소를 개인 페이지 및 개인 게시물에 공유할 수 있는 권한을 갖습니다. 공유된 게시물은 구성 요소별 [공개 범위](https://www.notion.so/3-4-76229a351219442f85fdcacc82915834?pvs=21)의 영향을 받으며 상위 범위로의 수정은 불가합니다.

### 4. DM(Direct Message)

* 유저 간 1:1 대화를 할 수 있는 **메신저** 기능입니다.
* 대화 시작 시, 대화 목록에 상대방 프로필 사진과 유저명으로 구성된 대화방을 생성합니다.
* 팔로우 관계 또는 스터디 구성원과의 대화만 허용됩니다.

### 5. 내 목표(각오) / 삭제

* 목표 시험과 각오를 선택적으로 등록할 수 있습니다.
* 목표 시험 등록 시, 시험의 종류와 응시 예정일을 등록하며, 관련 정보 검색 기능을 제공하는 링크를 제공합니다.
* 각오 등록 시, 데이터 베이스 내에 저장된 관련 명언을 랜덤하게 제시해주며 함께 제공되는 새로고침 버튼을 이용해 갱신할 수 있습니다.
* 각오 등록 시, 직접 텍스트를 입력할 수 있습니다.

### 6. 내 스케줄

* 내 스케줄과 목표 시험 응시일을 **캘린더**에 등록할 수 있습니다.
* 소속된 스터디가 있다면 스터디 스케줄을 내 캘린더로 옮겨올 수 있습니다.
* 게시판에 공유된 타인의 스케줄을 내 캘린더로 옮겨올 수 있습니다.

### 7. 성취도 이미지

* 출석률과 스터디 참여도, 정보 공유 횟수 등에 따라 성장하는 **이미지**를 제공합니다.
* 이미지가 긍정적으로 변화하는 경우

  * 출석 인증(1일 1회)
  * 게시물 업로드
    * 게시판 및 게시글 유형에 따른 차등 분배
    * 구체적인 내용은 팀원 간 협의 필요
  * 기타 공부 활동

### 8. 자격증 시험 종류 및 응시일 관련 정보 제공

* 공공데이터포털에서 제공하는 ‘ **국가전문자격 정보** ’를 바탕으로 자격증 사전을 제공합니다.
* 공공데이터포털에서 제공하는 ‘ **국가자격 계열별 학과 정보 데이터** ’를 바탕으로 이용자 학과에 따라 취득 가능한 자격증 리스트를 제공합니다.
* 공공데이터포털에서 제공하는 ‘ **국가전문자격 시험 시행일정 정보** ’를 바탕으로 자격증별 최신 자격증 응시일자 정보를 제공합니다.

## 화면 구성

### 1. 로그인 페이지

* 와이어 프레임 작업 후 이미지 삽입 예정

### 2. 회원가입 페이지

* 와이어 프레임 작업 후 이미지 삽입 예정

### 3. 메인 페이지

* 와이어 프레임 작업 후 이미지 삽입 예정

### 4. 마이 페이지

* 와이어 프레임 작업 후 이미지 삽입 예정

### 5. 스터디룸 페이지

* 와이어 프레임 작업 후 이미지 삽입 예정

### 6. 상단 네비게이션 바(공통)

* 와이어 프레임 작업 후 이미지 삽입 예정
