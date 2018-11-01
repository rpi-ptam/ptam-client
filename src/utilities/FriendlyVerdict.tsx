import React from "react";

export class FriendlyVerdict {

  public static getTag(internalName: string | undefined) {
    switch (internalName) {
      case "DENIED":
        return (<span className="tag is-danger">DENIED</span>);
      case "ACCEPTED":
        return (<span className="tag is-success">APPROVED</span>);
      case "ADJUSTED":
        return (<span className="tag is-warning">ADJUSTED</span>);
      case undefined:
      case null:
        return (<span className="tag is-light">UNDECIDED</span>);
      default:
        return "Unknown";
    }
  }

}
