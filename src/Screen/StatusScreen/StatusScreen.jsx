import React from "react";
import Status from "./Status";
import WebMaintinance from "./WebMaintanaceAnouncements";
import StatusAdminBar from "./StatusAdminBar";

export default function StatusScreen() {
  return (
    <>
      <WebMaintinance />
      <StatusAdminBar />
      <Status />
    </>
  );
}
