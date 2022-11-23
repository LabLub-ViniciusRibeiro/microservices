import { Kafka, Consumer as KafkaConsumer } from "kafkajs";
import { HandleEmail } from "../services/HandleEmail";

interface IConsumeProps {
  topics: string[];
  fromBeginning: boolean;
}

export class Consumer {
  private consumer: KafkaConsumer;

  constructor(groupId: string) {
    const kafka = new Kafka({
      brokers: ["localhost:9092"],
    });

    this.consumer = kafka.consumer({ groupId });
  }

  public async consume({ topics, fromBeginning }: IConsumeProps): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe({ topics: topics, fromBeginning });

    await this.consumer.run({
      eachMessage: async ({ topic, message }) => {
        const data = message.value?.toString();
        const objData = JSON.parse(data as string);
        if (data !== undefined) {
          const handleEmail = new HandleEmail(objData.user.email);

          switch (topic) {
            case 'welcome-user':
              handleEmail.welcomeEmail(objData.user.name, objData.user.email);
              break;
            case 'new-bets':
              handleEmail.newBetsEmail(objData.bets);
              break;
            case 'recover-password':
              handleEmail.recoverPasswordEmail();
              break;
            case 'schedule-remember':
              handleEmail.rememberToPlayEmail();
              break;
          }

        }
      },
    });
  }
}