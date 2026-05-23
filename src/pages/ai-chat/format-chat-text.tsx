import { Text } from "@tarojs/components";

export function formatChatText(text: string) {
  return text.split("\n").map((line, i) => {
    const isTitle = line.startsWith("**") && line.endsWith("**");
    const cleaned = line.replace(/\*\*/g, "");
    return (
      <Text key={i} className={isTitle ? "chat-bubble__line chat-bubble__line--bold" : "chat-bubble__line"}>
        {cleaned}
      </Text>
    );
  });
}
