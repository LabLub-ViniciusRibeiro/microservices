import { Kafka, Consumer as KafkaConsumer } from "kafkajs";
import { HandleEmail } from "../services/HandleEmail";

interface IConsumeProps {
  topic: string;
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

  public async consume({ topic, fromBeginning }: IConsumeProps): Promise<void> {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning });

    console.log("Iniciando busca...");

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const data = message.value?.toString();

        if (data !== undefined) {
          const handleEmail = new HandleEmail();
          handleEmail.welcomeEmail();
        }
      },
    });
  }
}