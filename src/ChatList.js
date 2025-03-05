function ChatList() {
    return (
        <div id="plist" class="people-list">
            <ul class="list-unstyled chat-list mt-2 mb-0">
                <li class="clearfix">
                    <img src="images/ai_agent.avif" alt="avatar" />
                    <div class="about">
                        <div class="name">Math 7</div>
                        <div class="status"> <i class="fa fa-circle online"></i> online </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ChatList;