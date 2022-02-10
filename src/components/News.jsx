import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/newsApi";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory: "cryptocurrencies",
    count: simplified ? 5 : 20,
  });
  const [news, setNews] = React.useState([]);
  if (isFetching) return <div>Loading...</div>;

  console.log(cryptoNews);

  return (
    <>
      <Row gutter={[24, 24]} className="news-card-container">
        {cryptoNews?.value.map((news, i) => (
          <Col xs={24} sm={12} lg={6} className="news-card" key={i}>
            <Card className="news-card" hoverable>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title level={4} className="news-title">
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0].image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="source"
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>

                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
