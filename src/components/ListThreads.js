import React from "react";
import { connect } from "react-redux";

import ThreadCard from "../containers/ThreadCard";

const ListThreads = props => {
  const { threads } = props;
  return threads.map(thread => {
    return <ThreadCard key={thread.id} {...thread} />;
  });
};

const mapStateToProps = state => ({
  threads: [
    {
      id: 1,
      title: "KEM Pharma LLC",
      content:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      user: "cmusterd0",
      time_created: "3:40 AM"
    },
    {
      id: 2,
      title: "ENCHANTE ACCESSORIES INC.",
      content:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      user: "kbeardon1",
      time_created: "4:17 PM"
    },
    {
      id: 3,
      title:
        "Johnson & Johnson Consumer Products Company, Division of Johnson & Johnson Consumer Companies, Inc.",
      content:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      user: "jegentan2",
      time_created: "11:52 AM"
    }
  ]
});

const ListThreadsContainer = connect(mapStateToProps)(ListThreads);

export default ListThreadsContainer;
