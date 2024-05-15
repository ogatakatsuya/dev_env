import { useEffect, useState } from "react"
import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text } from "@chakra-ui/react";

import LikeButton from "./LikeButton";
import DonmaiButton from "./DonmaiButton";
import WaraButton from "./WaraButton";

export default function ShowIndex(){
    const [value, setValue] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:8000/post/", {
                    method: "GET",
                });
                if (res.ok) {
                    const data = await res.json();
                    setValue(data.message);
                    console.log("Fetched data:", data);
                    // 取得したデータを処理する
                } else {
                    console.error("Error fetching tasks:", res.statusText);
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchData();
    }, []);

    return(
        <>
        <Card>
        <CardHeader>
            <Heading size='md'>失敗談一覧</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            {value.map((item, index) => (
                <Box key={item["id"]}>
                    <Text pt='2' fontSize='sm'>
                        {item["text"]}
                    </Text>
                    <Text fontSize='sm' my={4}>{item["created_at"]}</Text>
                    <span>{item["likes"]}</span>
                    <LikeButton post_id={item["id"]}/>
                    <span>{item["dontminds"]}</span>
                    <DonmaiButton/>
                    <WaraButton />
                </Box>
            ))}
            </Stack>
        </CardBody>
        </Card>
        </>
    )
}
