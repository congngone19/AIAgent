import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import './ChatContent'
import ChatContent from './ChatContent';

function Chat() {

    var [chatContent, setChatContent] = useState(
        [
            {
                "type": 0,
                "content": "Xin Chao"
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
                "sessionId": "b9e4bc69a0694a15b110cd7ed1e8303b",
                "action": "sendMessage",
                "chatInput": inputValue
            }
        ];
        SetInputValue("");
        try {
            var result = await fetch("https://103.27.61.96:8443/webhook/62190750-2529-43e0-ab65-30214b0039a2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": "Basic " + btoa("ngonc:ngonc"),
                    "test": "123"
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