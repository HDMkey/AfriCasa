"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMessages } from "@/hooks/use-messages";

export function Messages() {
  const { messages } = useMessages();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages récents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages?.map((message) => (
            <div key={message.id} className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="font-medium">{message.sender}</h3>
                <p className="text-sm text-gray-500">{message.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}