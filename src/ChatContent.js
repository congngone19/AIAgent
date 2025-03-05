function ChatContent(props) {
    var generateContent = function (type, message) {
        if (type == 1) {
            return (
                <li class="clearfix">
                    <div class="message my-message float-right">{message}</div>
                </li>
            );
        } else {
            return (
                <li class="clearfix">
                    {/* <div class="message other-message">{message}</div> */}
                    <pre class="message other-message">{message}</pre>
                </li>
            );
        }
    }
    return (
        <ul class="m-b-0" id="chat-content">
            {props.message.map(
                (mess) => generateContent(mess.type, mess.content))
            }
        </ul>
    );
}

export default ChatContent;