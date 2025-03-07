import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import './ChatContent'
import ChatContent from './ChatContent';
import { useLocation } from 'react-router-dom';

function Chat() {
    var { state } = useLocation();
    var [chatContent, setChatContent] = useState(
        [
            {
                "type": 0,
                "content": `Xin Chao ${state.user}`
            }
        ]
    );

    var [inputValue, SetInputValue] = useState("");

    const chatRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom whenever messages change
        chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatContent]);

    var handleChange = function (e) {
        SetInputValue(e.target.value);
    }

    var sendMessage = function () {

    }

    var getAnswer = async function () {
        var botContent = {
            "type": 0,
            "content": "Thank you"
        }

        var data = [
            {
                "sessionId": state.user,
                "action": "sendMessage",
                "chatInput": inputValue
            }
        ];
        SetInputValue("");
        try {
            var result = await fetch("https://inneduu.app.n8n.cloud/webhook/9b46392c-cc89-467d-9baf-85ed01fb3a9f", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Basic " + btoa("ngonc:ngonc"),
                    "innedu": "innedu"
                },
                body: JSON.stringify(data),
            }).then(response => {
                return response.text();
            })
                .then(data => {
                    return data;
                })
                .catch(error => console.error("Error fetching data:", error));
        } catch (error) {
            console.error("Error:", error);
        }
        var botContent = {
            "type": 0,
            "content": result
        }
        return botContent;
    }

    var generateMessage = async function () {
        var userContent = {
            "type": 1,
            "content": inputValue
        }
        setChatContent([...chatContent, userContent, await getAnswer()]);
    }
    return (
        <div class="chat">
            <div class="chat-header clearfix">
                <div class="row">
                    <div class="col-lg-6">
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                            <img src="images/ai_agent.avif" alt="avatar" />
                        </a>
                        <div class="chat-about">
                            <h6 class="m-b-0">AI Agent</h6>
                            <small>Last seen: Online</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-history" id="chat-context">
                <ChatContent message={chatContent} />
                <div ref={chatRef} />
            </div>
            <div class="chat-message clearfix">
                <div class="input-group mb-0">
                    <div class="input-group-prepend">
                        <span class="input-group-text" onClick={generateMessage}><i class="fa fa-send"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Enter text here..." value={inputValue} onChange={handleChange} />
                </div>
            </div>
        </div>
    );
}

export default Chat;