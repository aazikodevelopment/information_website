import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  useConnection,
  usePubSub,
} from "@videosdk.live/react-sdk";
import { getToken } from "./api";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { JoiningScreen } from "./JoiningScreen";
import ReactPlayer from "react-player";
import { ApiPost } from "../../../helpers/API/ApiData";
import { ToastContainer, toast } from "react-toastify";

const primary = "#333244";

const width = 400;
const height = (width * 2) / 3;
const borderRadius = 8;

const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const Title = ({ title, dark }) => {
  return <h2 style={{ color: dark ? primary : "#fff" }}>{title}</h2>;
};

const ExternalVideo = () => {
  const [{ link, playing }, setVideoInfo] = useState({
    link: null,
    playing: false,
  });

  const onVideoStateChanged = (data) => {
    const { currentTime, link, status } = data;

    switch (status) {
      case "stopped":
        console.log("stopped in switch");
        externalPlayer.current.src = null;
        setVideoInfo({ link: null, playing: false });
        break;
      case "resumed":
        if (typeof currentTime === "number") {
          externalPlayer.current.currentTime = currentTime;
        }
        externalPlayer.current.play();
        setVideoInfo((s) => ({ ...s, playing: true }));
        break;
      case "paused":
        externalPlayer.current.pause();
        setVideoInfo((s) => ({ ...s, playing: false }));
        break;
      case "started":
        setVideoInfo({ link, playing: true });
        break;
      default:
        break;
    }
  };

  const onVideoSeeked = (data) => {
    const { currentTime } = data;
    if (typeof currentTime === "number") {
      externalPlayer.current.currentTime = currentTime;
    }
  };

  useMeeting({ onVideoStateChanged, onVideoSeeked });
  const externalPlayer = useRef();

  return !link ? null : (
    <div
      style={{
        borderRadius,
        padding: borderRadius,
        margin: borderRadius,
        backgroundColor: primary,
        display: "flex",
      }}
    >
      <Title title={"Externam Video"} />

      <video
        style={{ borderRadius, height, width, backgroundColor: "black" }}
        autoPlay
        ref={externalPlayer}
        src={link}
      />
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages?.map((message, i) => {
        const { senderName, message: text, timestamp } = message;

        return (
          <div
            style={{
              margin: 8,
              backgroundColor: "#000",
              borderRadius: 8,
              overflow: "hidden",
              padding: 8,
              color: "#fff",
            }}
            key={i}
          >
            <p style={{ margin: 0, padding: 0, fontStyle: "italic" }}>
              {senderName}
            </p>
            <h3 style={{ margin: 0, padding: 0, marginTop: 4 }}>{text}</h3>
            <p
              style={{
                margin: 0,
                padding: 0,
                opacity: 0.6,
                marginTop: 4,
              }}
            >
              {formatAMPM(new Date(timestamp))}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const MeetingChat = ({ tollbarHeight }) => {
  const { publish, messages } = usePubSub("CHAT", {});
  const [message, setMessage] = useState("");
  return (
    <div
      style={{
        marginLeft: borderRadius,
        width: 400,
        backgroundColor: primary,
        overflowY: "scroll",
        borderRadius,
        height: `calc(100vh - ${tollbarHeight + 2 * 60}px)`,
        padding: borderRadius,
      }}
      className=""
    >
      <Title title={"Chat"} />

      <div style={{ display: "flex" }} className="">
        <input
          value={message}
          onChange={(e) => {
            const v = e.target.value;
            setMessage(v);
          }}
          className="form-control "
          placeholder="Enter Message"
        />
        <button
          className={"button blue"}
          onClick={() => {
            const m = message;

            if (m.length) {
              publish(m, { persist: true });
              setMessage("");
            }
          }}
        >
          Send
        </button>
      </div>
      <MessageList messages={messages} />
    </div>
  );
};

const ParticipantView = ({ participantId }) => {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const onStreamEnabled = (stream) => {};
  const onStreamDisabled = (stream) => {};

  const {
    displayName,
    participant,
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn,
    isLocal,
    isActiveSpeaker,
    isMainParticipant,
    switchTo,
    pinState,
    setQuality,
    enableMic,
    disableMic,
    enableWebcam,
    disableWebcam,
    pin,
    unpin,
  } = useParticipant(participantId, {
    onStreamEnabled,
    onStreamDisabled,
  });

  const webcamMediaStream = useMemo(() => {
    if (webcamOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  const screenShareMediaStream = useMemo(() => {
    if (screenShareOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(screenShareStream.track);
      return mediaStream;
    }
  }, [screenShareStream, screenShareOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) => console.error("mic  play() failed", error));
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div
      style={{
        width,
        backgroundColor: primary,
        borderRadius: borderRadius,
        overflow: "hidden",
        margin: borderRadius,
        padding: borderRadius,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        position: "relative",
      }}
    >
      <audio ref={micRef} autoPlay muted={isLocal} />

      <div
        style={{
          position: "relative",
          borderRadius: borderRadius,
          overflow: "hidden",
          backgroundColor: "black",
          width: "100%",
          height: 300,
        }}
      >
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <>
            <ReactPlayer
              ref={webcamRef}
              //
              playsinline // very very imp prop
              playIcon={<></>}
              //
              pip={false}
              light={false}
              controls={false}
              muted={true}
              playing={true}
              //
              url={webcamMediaStream}
              //
              height={"100%"}
              width={"100%"}
              onError={(err) => {
                console.log(err, "participant video error");
              }}
            />
          </>
          <div
            style={{
              position: "absolute",
              top: borderRadius,
              right: borderRadius,
            }}
          >
            <p
              style={{
                color: webcamOn ? "green" : "red",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              WEB CAM
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          >
            <button
              className="button blue"
              style={
                {
                  // height: 50,
                  // width: 200,
                }
              }
              onClick={async () => {
                const meetingId = prompt(
                  `Please enter meeting id where you want to switch ${displayName}`
                );
                const token = await getToken();
                if (meetingId && token) {
                  try {
                    await switchTo({
                      meetingId,
                      payload: "Im Switching",
                      token: token,
                    });
                  } catch (e) {
                    console.log("swithc To Error", e);
                  }
                } else {
                  alert("Empty meetingId!");
                }
              }}
            >
              Switch Participant
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: borderRadius,
          position: "relative",
          borderRadius: borderRadius,
          overflow: "hidden",
          backgroundColor: "black",
          width: "100%",
          height: 300,
        }}
      >
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <>
            <ReactPlayer
              ref={screenShareRef}
              //
              playsinline // very very imp prop
              playIcon={<></>}
              //
              pip={false}
              light={false}
              controls={false}
              muted={true}
              playing={true}
              //
              url={screenShareMediaStream}
              //
              height={"100%"}
              width={"100%"}
              onError={(err) => {
                console.log(err, "participant video error");
              }}
            />
          </>
          <div
            style={{
              position: "absolute",
              top: borderRadius,
              right: borderRadius,
            }}
          >
            <p
              style={{
                color: screenShareOn ? "green" : "red",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              SCREEN SHARING
            </p>
          </div>
        </div>
      </div>
      {/* <table>
        {[
          { k: "Name", v: displayName },
          { k: "webcamOn", v: webcamOn ? "YES" : "NO" },
          { k: "micOn", v: micOn ? "YES" : "NO" },
          { k: "screenShareOn", v: screenShareOn ? "YES" : "NO" },
          { k: "isLocal", v: isLocal ? "YES" : "NO" },
          { k: "isActiveSpeaker", v: isActiveSpeaker ? "YES" : "NO" },
          { k: "isMainParticipant", v: isMainParticipant ? "YES" : "NO" },
        ].map(({ k, v }) => (
          <tr key={k}>
            <td style={{ border: "1px solid #fff", padding: 4 }}>
              <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{k}</h3>
            </td>
            <td style={{ border: "1px solid #fff", padding: 4 }}>
              <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{v}</h3>
            </td>
          </tr>
        ))}
      </table> */}
    </div>
  );
};

const ParticipantsView = () => {
  const { participants } = useMeeting();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        padding: borderRadius,
      }}
    >
      <Title dark title={"Participants"} />
      {chunk([...participants.keys()]).map((k) => (
        <div style={{ display: "flex" }}>
          {k.map((l) => (
            <ParticipantView key={l} participantId={l} />
          ))}
        </div>
      ))}
    </div>
  );
};

const ConnectionView = ({ connectionId }) => {
  const { connection } = useConnection(connectionId, {
    onMeeting: {
      onChatMessage: ({ message, participantId }) => {
        alert(
          `A Person ${participantId} from ${connectionId} Wants to say : ${message}`
        );
      },
    },
  });

  const connectionParticipants = [...connection.meeting.participants.values()];

  const ConnectionParticipant = ({ participant }) => {
    return (
      <div style={{ padding: 4, border: "1px solid blue" }}>
        <p>{participant.displayName}</p>
        <button
          onClick={async () => {
            const meetingId = prompt(
              `In Which meetingId you want to switch ${participant.displayName} ?`
            );
            const payload = prompt("enter payload you want to pass");

            const token = await getToken();
            if ((meetingId, token, payload)) {
              participant
                .switchTo({ meetingId, token, payload })
                .catch(console.log);
            } else {
              alert("Empty meetingId or payload ");
            }
          }}
          className={"button "}
        >
          Switch
        </button>
      </div>
    );
  };

  return (
    <div
      style={{
        width,
        backgroundColor: primary,
        borderRadius: borderRadius,
        overflow: "hidden",
        margin: borderRadius,
        padding: borderRadius,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          connection.close();
        }}
        className={"button"}
      >
        Close Connection
      </button>

      <button
        onClick={() => {
          const message = prompt("Enter You Message");
          if (message) {
            connection.meeting.sendChatMessage(message);
          } else {
            alert("Empty Message ");
          }
        }}
        className={"button"}
      >
        Send Meessage
      </button>

      <button
        onClick={() => {
          connection.meeting.end();
        }}
        className={"button"}
      >
        End Meeting
      </button>
      <p>
        {connection.id} : {connection.payload}
      </p>
      {connectionParticipants.map((participant) => {
        return (
          <ConnectionParticipant
            key={`${connection.id}_${participant.id}`}
            participant={participant}
          />
        );
      })}
    </div>
  );
};

const ConnectionsView = () => {
  const { connections, meetingId } = useMeeting();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        padding: borderRadius,
      }}
    >
      <Title dark title={"Connections"} />
      {chunk([...connections.keys()]).map((k) => (
        <div style={{ display: "flex" }} key={k}>
          {k.map((l) => (
            <ConnectionView key={`${meetingId}_${l}`} connectionId={l} />
          ))}
        </div>
      ))}
    </div>
  );
};

function MeetingView({ onNewMeetingIdToken, onMeetingLeave }) {
  const [participantViewVisible, setParticipantViewVisible] = useState(true);

  function onParticipantJoined(participant) {
    console.log(" onParticipantJoined", participant);
  }
  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }
  const onSpeakerChanged = (activeSpeakerId) => {
    console.log(" onSpeakerChanged", activeSpeakerId);
  };
  function onPresenterChanged(presenterId) {
    console.log(" onPresenterChanged", presenterId);
  }
  function onMainParticipantChanged(participant) {
    console.log(" onMainParticipantChanged", participant);
  }
  function onEntryRequested(participantId, name) {
    console.log(" onEntryRequested", participantId, name);
  }
  function onEntryResponded(participantId, name) {
    console.log(" onEntryResponded", participantId, name);
  }
  function onRecordingStarted() {
    console.log(" onRecordingStarted");
  }
  function onRecordingStopped() {
    console.log(" onRecordingStopped");
  }
  function onChatMessage(data) {
    console.log(" onChatMessage", data);
  }
  function onMeetingJoined() {
    console.log("onMeetingJoined");
  }
  function onMeetingLeft() {
    console.log("onMeetingLeft");
    onMeetingLeave();
  }
  const onLiveStreamStarted = (data) => {
    console.log("onLiveStreamStarted example", data);
  };
  const onLiveStreamStopped = (data) => {
    console.log("onLiveStreamStopped example", data);
  };

  const onVideoStateChanged = (data) => {
    console.log("onVideoStateChanged", data);
  };
  const onVideoSeeked = (data) => {
    console.log("onVideoSeeked", data);
  };

  const onWebcamRequested = (data) => {
    console.log("onWebcamRequested", data);
  };
  const onMicRequested = (data) => {
    console.log("onMicRequested", data);
  };
  const onPinStateChanged = (data) => {
    console.log("onPinStateChanged", data);
  };
  const onSwitchMeeting = (data) => {
    window.focus();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to switch Meeting ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            onNewMeetingIdToken(data);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const onConnectionOpen = (data) => {
    console.log("onConnectionOpen", data);
  };

  const {
    meetingId,
    meeting,
    localParticipant,
    mainParticipant,
    activeSpeakerId,
    participants,
    presenterId,
    localMicOn,
    localWebcamOn,
    localScreenShareOn,
    messages,
    isRecording,
    isLiveStreaming,
    pinnedParticipants,
    //
    join,
    leave,
    connectTo,
    end,
    //
    startRecording,
    stopRecording,
    //
    respondEntry,
    //
    muteMic,
    unmuteMic,
    toggleMic,
    //
    disableWebcam,
    enableWebcam,
    toggleWebcam,
    //
    disableScreenShare,
    enableScreenShare,
    toggleScreenShare,
    //
    getMics,
    getWebcams,
    changeWebcam,
    changeMic,

    startVideo,
    stopVideo,
    resumeVideo,
    pauseVideo,
    seekVideo,
    startLivestream,
    stopLivestream,
  } = useMeeting({
    onParticipantJoined,
    onParticipantLeft,
    onSpeakerChanged,
    onPresenterChanged,
    onMainParticipantChanged,
    onEntryRequested,
    onEntryResponded,
    onRecordingStarted,
    onRecordingStopped,
    onChatMessage,
    onMeetingJoined,
    onMeetingLeft,
    onLiveStreamStarted,
    onLiveStreamStopped,
    onVideoStateChanged,
    onVideoSeeked,
    onWebcamRequested,
    onMicRequested,
    onPinStateChanged,
    onSwitchMeeting,
    onConnectionOpen,
  });

  const handlestartVideo = () => {
    console.log("handlestartVideo");

    startVideo({
      link: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    });
  };
  const handlestopVideo = () => {
    stopVideo();
  };
  const handleresumeVideo = () => {
    resumeVideo();
  };
  const handlepauseVideo = () => {
    pauseVideo({ currentTime: 2 });
  };
  const handlesseekVideo = () => {
    seekVideo({ currentTime: 5 });
  };
  const handleStartLiveStream = () => {
    startLivestream([
      {
        url: "rtmp://a.rtmp.youtube.com/live2",
        streamKey: "key",
      },
    ]);
  };
  const handleStopLiveStream = () => {
    stopLivestream();
  };
  const handleStartRecording = () => {
    startRecording();
  };
  const handleStopRecording = () => {
    stopRecording();
  };

  const tollbarHeight = 120;
  const [state, setState] = useState({
    items: [],
    value: "",
    error: null,
  });
  const handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var value = state.value.trim();

      if (value && isValid(value)) {
        setState({
          ...state,
          items: [...state.items, state.value],
          value: "",
        });
      }
    }
  };

  const handleChange = (evt) => {
    setState({
      ...state,
      value: evt.target.value,
      error: null,
    });
  };

  const handleDelete = (item) => {
    setState({
      ...state,
      items: state.items.filter((i) => i !== item),
    });
  };

  const handlePaste = (evt) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter((email) => !this.isInList(email));
      setState({
        ...state,
        items: [...state.items, ...toBeAdded],
      });
    }
  };

  const isValid = (email) => {
    let error = null;

    if (isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      setState({ ...state, error });

      return false;
    }
    return true;
  };

  const isInList = (email) => {
    return state.items.includes(email);
  };

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  const sendPeperSet = () => {
    const data = {
      email: state.items,
      meetingId: meetingId,
    };

    ApiPost(`video/send-meetingId`, data)
      .then((res) => {
        if (res?.status == 200) {
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
      }}
    >
      <div style={{ height: tollbarHeight }} className="flexssss">
        <button className={"button red"} onClick={leave}>
          LEAVE
        </button>
        <button className={"button blue"} onClick={toggleMic}>
          Toggle Mic
        </button>
        <button
          className={"button blue"}
          onClick={() => {
            toggleWebcam();
          }}
        >
          Toggle Webcam
        </button>
        <button className={"button blue"} onClick={toggleScreenShare}>
          Toggle Screen Share
        </button>
        {/* <button className={"button blue"} onClick={handlestartVideo}>
          startVideo
        </button>
        <button className={"button blue"} onClick={handlestopVideo}>
          stopVideo
        </button>
        <button className={"button blue"} onClick={handleresumeVideo}>
          resumeVideo
        </button>
        <button className={"button blue"} onClick={handlepauseVideo}>
          pauseVideo
        </button>
        <button className={"button blue"} onClick={handlesseekVideo}>
          seekVideo
        </button> */}
        {/* <button className={"button blue"} onClick={handleStartLiveStream}>
          Start Live Stream
        </button>
        <button className={"button blue"} onClick={handleStopLiveStream}>
          Stop Live Stream
        </button> */}
        <button className={"button blue"} onClick={handleStartRecording}>
          Start Recording
        </button>
        <button className={"button blue"} onClick={handleStopRecording}>
          Stop Recording
        </button>
        <button
          className={"button blue"}
          onClick={() => setParticipantViewVisible((s) => !s)}
        >
          Switch to {participantViewVisible ? "Connections" : "Participants"}{" "}
          view
        </button>

        <button
          className={"button blue"}
          onClick={async () => {
            const meetingId = prompt(
              `Please enter meeting id where you want Connect`
            );
            if (meetingId) {
              try {
                await connectTo({
                  meetingId,
                  payload: "This is Testing Payload",
                });
              } catch (e) {
                console.log("Connect to Error", e);
              }
            } else {
              alert("Empty meetingId!");
            }
          }}
        >
          Make Connections
        </button>
      </div>
      <h1>Meeting id is : {meetingId}</h1>
      <div className="heightAuto p-5">
        <h2>Send Link to User</h2>
        <div className="col-md-5">
          <div className="card p-5">
            {state.items.map((item) => (
              <div className="tagItem" key={item}>
                {item}
                <button
                  type="button"
                  className="button"
                  onClick={() => handleDelete(item)}
                >
                  &times;
                </button>
              </div>
            ))}

            <input
              className="form-control"
              value={state.value}
              placeholder="Type or paste email addresses and press `Enter`..."
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={(e) => handleChange(e)}
              onPaste={(e) => handlePaste(e)}
            />

            <div className="py-2">
              {state.error && <p className="error">{state.error}</p>}
            </div>
            <div className="py-2">
              {state.items.length ? (
                <>
                  <button
                    type="submit"
                    onClick={() => sendPeperSet()}
                    className="btn btn-primary mr-2"
                  >
                    Send Mail
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            flex: 1,
            overflowY: "scroll",
            height: `calc(100vh - ${tollbarHeight}px)`,
          }}
        >
          <ExternalVideo />
          {/* <ParticipantsView /> */}
          {participantViewVisible ? <ParticipantsView /> : <ConnectionsView />}
        </div>
        <MeetingChat tollbarHeight={tollbarHeight} />
      </div>
    </div>
  );
}

const App = () => {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);
  const [isMeetingStarted, setMeetingStarted] = useState(false);

  return isMeetingStarted ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: micOn,
        webcamEnabled: webcamOn,
        name: participantName ? participantName : "TestUser",
      }}
      token={token}
      reinitialiseMeetingOnConfigChange={true}
      joinWithoutUserInteraction={true}
    >
      <MeetingView
        onNewMeetingIdToken={({ meetingId, token }) => {
          setMeetingId(meetingId);
          setToken(token);
        }}
        onMeetingLeave={() => {
          setToken("");
          setMeetingId("");
          setWebcamOn(false);
          setMicOn(false);
          setMeetingStarted(false);
        }}
      />
    </MeetingProvider>
  ) : (
    <JoiningScreen
      participantName={participantName}
      setParticipantName={setParticipantName}
      meetingId={meetingId}
      setMeetingId={setMeetingId}
      setToken={setToken}
      setMicOn={setMicOn}
      micOn={micOn}
      webcamOn={webcamOn}
      setWebcamOn={setWebcamOn}
      onClickStartMeeting={() => {
        setMeetingStarted(true);
      }}
      startMeeting={isMeetingStarted}
    />
  );
};

export default App;
