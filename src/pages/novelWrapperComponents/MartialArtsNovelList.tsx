import React from 'react';
import './NovelList.css';

interface MartialArtsDataProps {
  martialArtsData: {
    id: number;
    title: string;
    author: string;
    cloud: number;
    userLike: number;
    thumbnail: string;
    complete: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const NovelList: React.FC<MartialArtsDataProps> = (
  props: MartialArtsDataProps,
) => {
  const refinedupdatedAt: string = props.martialArtsData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.martialArtsData.title.slice(0, 9);
  const sliceAuthor: string = props.martialArtsData.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.martialArtsData.title.length > 9) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.martialArtsData.author.length > 12) return true;
    else return false;
  };

  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.martialArtsData.thumbnail})`,
        }}
      >
        {props.martialArtsData.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.martialArtsData.cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.martialArtsData.title}
          </div>
          {refinedupdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.martialArtsData.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.martialArtsData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;