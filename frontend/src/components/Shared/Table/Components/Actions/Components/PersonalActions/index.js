import React from 'react'
import { Flex, Icon, Box, Avatar } from "@/components"
import { HelpIcon, NotificationIcon } from "@/components/Icons"

function PersonalActions(props) {
    return (
        <Flex alignItems="center">
            <Box>
                <Icon>
                    <HelpIcon />
                </Icon>
            </Box>
            <Box mx="10px">
                <Icon>
                    <NotificationIcon />
                </Icon>
            </Box>
            <Box>
                <Avatar src="https://static.airtable.com/images/userIcons/user_icon_4@2x.png" />
            </Box>
        </Flex>
    )
}

export default PersonalActions