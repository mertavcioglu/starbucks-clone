import React from "react";
import "./Featured.css";
import FeaturedItem from "../components/FeaturedItem";

function Featured() {
  return (
    <div className="featured-container">
      <FeaturedItem
        featuredImage="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?data=eyJpbWFnZUlkIjoiZDI2ZjdkZmMtYjE5Mi00ODc4LTliYmUtMGUwZTdjZDUyOTU1Iiwid2lkdGgiOjcyMCwiaGVpZ2h0Ijo3MjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0="
        featuredText="Starbucks® Paslanmaz Çelik Damalı Yeşil Termos"
      />
      <FeaturedItem
        featuredImage="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?data=eyJpbWFnZUlkIjoiNjEyZjIwNzctNGI3Ni00MzA4LTlkZGUtNDhhZWZhNzYyZTFkIiwid2lkdGgiOjcyMCwiaGVpZ2h0Ijo3MjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0="
        featuredText="Starbucks® Klasik Seri Termos - Mat Yeşil - Siyah Renkli 355ml"
      />
      <FeaturedItem
        featuredImage="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?data=eyJpbWFnZUlkIjoiN2Y2NzljYWItZWM3Ni00ZjE2LWE5NzktYzc1YzdjMjFmYTU3Iiwid2lkdGgiOjcyMCwiaGVpZ2h0Ijo3MjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0="
        featuredText="Guatemala Antigua"
      />

      <FeaturedItem
        featuredImage="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?data=eyJpbWFnZUlkIjoiMWI2OWYyMmItN2RmOS00YzEyLWJlYzMtMWRiYWE4NTYxNGUxIiwid2lkdGgiOjcyMCwiaGVpZ2h0Ijo3MjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0="
        featuredText="Colombia Nariño"
      />
      <FeaturedItem
        featuredImage="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?data=eyJpbWFnZUlkIjoiZTc2Zjg5OGEtYjdjNS00YTdiLTk2NGYtNDc3YTQxM2U1ZTk3Iiwid2lkdGgiOjcyMCwiaGVpZ2h0Ijo3MjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0="
        featuredText="Ethiopia"
      />
    </div>
  );
}

export default Featured;
